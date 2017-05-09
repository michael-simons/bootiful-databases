/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Header module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojdialog',
  'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojmenu'],
  function (oj, ko, $) {
    /**
     * The view model for the complementary content module
     */
    function CompContentModel() {
      var self = this;

      self.schemaVersion = ko.observable("");
      
      ko.computed(function () {
            $.ajax({
                url: "/flyway",
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, jqXHR) {
                    
                    var lastMigration = data[0].migrations[data[0].migrations.length - 1];
                    self.schemaVersion('v' + lastMigration.version  + ' - "' + lastMigration.description + '"');
                    
                    /*
                    self.allArtists.removeAll();
                    for (var i = 0, len = data.records.length; i < len; i++) {
                        self.allArtists.push({value: data.records[i][0], label: data.records[i][1]});
                    }
                    self.selectedArtists.removeAll();*/
                }});
      }, this);
    }
    return new CompContentModel();
  }
);
