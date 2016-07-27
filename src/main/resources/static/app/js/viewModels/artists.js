define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojselectcombobox'],
        function (oj, ko, $) {
            function artistsContentViewModel() {
                var self = this;

                // The array containing all artists from api
                // Use the ojCombobox to implement server side filtering instead
                // of my brute force approach getting all artists
                self.allArtists = ko.observableArray([]);

                // We need this to store and get the selected artists...
                self.selectedArtists = ko.observableArray([]);

                // Load the artists data
                ko.computed(function() {
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


            }
            return new artistsContentViewModel();
        });
