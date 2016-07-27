define(['ojs/ojcore', 'knockout', 'jquery', 'moment', 'ojs/ojselectcombobox', 'ojs/ojchart'],
        function (oj, ko, $, moment) {
            function artistsContentViewModel() {
                var self = this;

                // The array containing all artists from api
                // Use the ojCombobox to implement server side filtering instead
                // of my brute force approach getting all artists
                self.allArtists = ko.observableArray([]);

                // We need this to store and get the selected artists...
                self.selectedArtists = ko.observableArray([]);

                // Load the artists data
                ko.computed(function () {
                    $.ajax({
                        url: "/api/artists",
                        type: 'GET',
                        dataType: 'json',
                        success: function (data, textStatus, jqXHR) {
                            self.allArtists.removeAll();
                            for (var i = 0, len = data.records.length; i < len; i++) {
                                self.allArtists.push({value: data.records[i][0], label: data.records[i][1]});
                            }
                            self.selectedArtists.removeAll();
                        }});
                }, this);


                self.areaSeriesValue = ko.observableArray([]);
                self.areaGroupsValue = ko.observableArray([]);
                self.dataCursorValue = ko.observable('off');

                self.selectionChanged = function (event, data) {
                    if ("value" !== data.option) {
                        return;
                    }

                    self.areaSeriesValue.removeAll();
                    self.areaGroupsValue.removeAll();
                    self.dataCursorValue('off');

                    if (data.value.length === 0) {
                        return;
                    }

                    $.ajax({
                        url: "/api/artists/" + self.selectedArtists().join() + "/cumulativePlays",
                        type: 'GET',
                        dataType: 'json',
                        success: function (data, textStatus, jqXHR) {
                            if (data.records.length === 0) {
                                return;
                            }
                            
                            // Need the artists labels for the series
                            var artists = self.allArtists().filter(function (elem) {
                                return self.selectedArtists.indexOf(elem.value) >= 0;
                            }).map(function (elem) {
                                return elem.label;
                            });

                            // Make it nice and compute continous days
                            var firstDay = moment(data.records[0][0]);
                            var lastDay = moment(data.records[data.records.length - 1][0]);
                            var days = [];
                            while (firstDay.isSameOrBefore(lastDay)) {
                                days.push(firstDay.toDate());
                                firstDay.add(1, 'd');
                            }

                            // Create groups and series from array of records                            
                            // This groups the records by day
                            var hlp = data.records.reduce(function (acc, cur) {
                                var key = moment(cur[0]).toDate();
                                if (acc[key]) {
                                    acc[key][cur[1]] = cur[2];
                                } else {
                                    acc[key] = {};
                                    $.each(artists, function (i, val) {
                                        acc[key][val] = val === cur[1] ? cur[2] : null;
                                    });
                                }
                                return acc;
                            }, {});

                            // This collects the items by artists
                            var series = artists.map(function (label) {
                                var data = [];
                                var prev = 0;
                                $.each(days, function (i, value) {
                                    var cur = hlp[value] && hlp[value][label] || prev;
                                    data.push(cur);
                                    prev = cur;
                                });
                                return {name: label, items: data};
                            });

                            self.areaGroupsValue(days);
                            self.areaSeriesValue(series);
                            self.dataCursorValue('on');
                        }
                    });
                };
            }
            return new artistsContentViewModel();
        });
