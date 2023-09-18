actor class Backend() {
  var cell : Int = 0;

  // Suma
  public func add(n : Int) : async Int {
    cell += n;
    return cell;
  };

  // Resta
  public func sub(n : Int) : async Int {
    cell -= n;
    return cell;
  };

  // Multiplicación
  public func mul(n : Int) : async Int {
    cell *= n;
    return cell;
  };

  // Dividisión
  public func div(n : Int) : async ?Int {
    if (n == 0) {
      return null;
    };

    cell /= n;
    return ?cell;
  };

  /// Resto o como se llame
  public func mod(n : Int) : async Int {
    cell %= n;
    return cell;
  };

  // Exponencial
  public func exp(n : Int) : async Int {
    cell **= n;
    return cell;
  };

  // Definir el valor de cell
  public func currentValue() : async Int {
    return cell;
  };

  // Borrar Todo
  public func clearAll() : async Int {
    if (cell : Int != 0) {
      cell -= cell;
    };

    return cell;
  };
};
