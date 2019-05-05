export class Message {
  private _text: string;
  private _type: string;
  private _code: string;


  constructor(text: string, type: string, code: string) {
    this._text = text;
    this._type = type;
    this._code = code;
  }


  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }
}
