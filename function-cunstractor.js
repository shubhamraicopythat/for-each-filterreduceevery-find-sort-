function product(n, p, r) {
  this.name = n;
  this.price = p;
  this.rating = r;
  return this;
}

const p = new product("Mack", 1500, 5);
console.log(p);
