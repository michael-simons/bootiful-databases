define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojinputnumber', 'ojs/ojselectcombobox', 'ojs/ojchart'],
        function (oj, ko, $) {
            function chartsContentViewModel() {
                var self = this;

                self.yearConverter = oj.Validation.converterFactory("number").createConverter({useGrouping: false});
                self.maxYear = ko.observable(new Date().getFullYear());
                self.selectedYear = ko.observable(self.maxYear());

                var months = [];
                var dateConverter = oj.Validation.converterFactory("datetime").createConverter({pattern: 'MMMM'});
                for (var i = 1; i <= 12; ++i) {
                    months.push({value: i, label: dateConverter.format(oj.IntlConverterUtils.dateToLocalIso(new Date(2016, i - 1, 1)))});
                }
                self.months = ko.observableArray(months);
                self.selectedMonth = ko.observableArray([3]);

                self.chartSeriesValue = ko.observableArray([]);
                self.chartLabel = function (dataContext) {
                    var suffix = '';
                    if(dataContext.seriesData.change !== null && dataContext.seriesData.change !== 0) {
                        suffix += ' ';
                        suffix += dataContext.seriesData.change > 0 ? '▲' : '▼';
                        suffix += dataContext.seriesData.change;

                    }
                    return dataContext.series + suffix;
                };

                var updateCharts = function () {
                    self.chartSeriesValue.removeAll();
                    $.ajax({
                        url: "/api/charts/" + self.selectedYear() + "/" + self.selectedMonth()[0],
                        data: {n:20},
                        type: 'GET',
                        dataType: 'json',
                        success: function (data, textStatus, jqXHR) {
                            if (data.records.length === 0) {
                                return;
                            }
                            var hlp = [];
                            for (var i = 0, len = data.records.length; i < len; i++) {
                                hlp.push({name: data.records[i][0],  change: data.records[i][2], items: [data.records[i][1]]});
                            }
                            self.chartSeriesValue(hlp);
                        }
                    });
                };

                self.optionChanged = function (event, data) {
                    if ("value" !== data.option) {
                        return;
                    }
                    updateCharts();
                };

                updateCharts();
            }
            return new chartsContentViewModel();
        });
