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
                            var hlp = [];
                            hlp.push({value: -1, label: null});
                            for (var i = 0, len = data.records.length; i < len; i++) {
                                hlp.push({value: data.records[i][0], label: data.records[i][1]});
                            }
                            self.allArtists(hlp);

                            self.selectedArtists.removeAll();
                            self.selectedArtists.push(-1);
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
                    
                    if (data.value.length === 0 || data.value[0] === -1) {                        
                        return;
                    }

                    $.ajax({
                        url: "/api/artists/" + self.selectedArtists()[0] + "/cumulativePlays",
                        type: 'GET',
                        dataType: 'json',
                        success: function (data, textStatus, jqXHR) {
                            if (data.records.length === 0) {
                                return;
                            }
                            var groups = []
                            var items = []
                            for (var i = 0, len = data.records.length; i < len; i++) {
                                groups.push(moment(data.records[i][0]).toDate());
                                items.push(data.records[i][2]);
                            }
                            self.areaGroupsValue(groups);
                            self.areaSeriesValue([{name: data.records[0][1], items: items}]);
                            self.dataCursorValue('on');
                        }
                    });
                };
            }
            return new artistsContentViewModel();
        });
