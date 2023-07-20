namespace my.bookshop;

@cds.persistence.exists:false
entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}