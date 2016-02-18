export default function IO(f) { this.run = f }

export const run = function(io) { return io.run() }

IO.of = function(x) {
  return new IO(function() {
    return x
  })
}

IO.prototype.map = function(f) {
  return new IO(function(x) {
    f(this.run(x))
  })
}

IO.prototype.join = function() {
  return this.run()
}

IO.prototype.chain = function(f) {
  return this.map(f).join()
}

IO.prototype.ap = function(a) {
  return this.chain(function(f) {
    return a.map(f)
  })
}

IO.prototype.inspect = function() {
  return 'IO('+inspect(this.run)+')'
}
