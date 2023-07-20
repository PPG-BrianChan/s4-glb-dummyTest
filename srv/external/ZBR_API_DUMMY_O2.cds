/* checksum : a8a5417d3a5b642168656fb1653a8847 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.message.scope.supported : 'true'
@sap.supported.formats : 'atom json xlsx'
service ZBR_API_DUMMY_O2 {};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.content.version : '1'
@sap.label : 'BR Dummy RAP Consumption'
entity ZBR_API_DUMMY_O2.ZC_DummyBR {
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales Order'
  key SalesOrder : String(10) not null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales Order Type'
  SalesOrderType : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales Organization'
  SalesOrganization : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Distribution Channel'
  DistributionChannel : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sold-to Party'
  SoldToParty : String(10);
};

@cds.external : true
type ZBR_API_DUMMY_O2.DummyFunctionImportResult {
  @sap.label : 'TRUE'
  IsInvalid : Boolean;
};

@cds.external : true
action ZBR_API_DUMMY_O2.Test() returns ZBR_API_DUMMY_O2.DummyFunctionImportResult;

