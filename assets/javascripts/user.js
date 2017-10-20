function User(attrs){
  this.id = attrs.id;
  this.hash = this.id & 0xff;
}
