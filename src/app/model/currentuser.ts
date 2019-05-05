import { Injectable } from '@angular/core';
import { Adapter } from '../adapter/Adapter';
export class Currentuser {

  private _agencyName: String;
  private _authToken: String;
  private _isCarburantP: Boolean;
  private _isCarburantS: Boolean;
  private _isContactUs: Boolean;
  private _isCourse: Boolean;
  private _isDoor: Boolean;
  private _isDriver: Boolean;
  private _isHistory: Boolean;
  private _isLastPosition: Boolean;
  private _isMyAccount: Boolean;
  private _isNotifConf: Boolean;
  private _isNotifCons: Boolean;
  private _isParameters: Boolean;
  private _isSpeedMax: Boolean;
  private _isStartStop: Boolean;
  private _isTempF: Boolean;
  private _isTempM: Boolean;
  private _isZoneOne: Boolean;
  private _isZoneTwo: Boolean;


  get agencyName(): String {
    return this._agencyName;
  }

  set agencyName(value: String) {
    this._agencyName = value;
  }

  get authToken(): String {
    return this._authToken;
  }

  set authToken(value: String) {
    this._authToken = value;
  }

  get isCarburantP(): Boolean {
    return this._isCarburantP;
  }

  set isCarburantP(value: Boolean) {
    this._isCarburantP = value;
  }

  get isCarburantS(): Boolean {
    return this._isCarburantS;
  }

  set isCarburantS(value: Boolean) {
    this._isCarburantS = value;
  }

  get isContactUs(): Boolean {
    return this._isContactUs;
  }

  set isContactUs(value: Boolean) {
    this._isContactUs = value;
  }

  get isCourse(): Boolean {
    return this._isCourse;
  }

  set isCourse(value: Boolean) {
    this._isCourse = value;
  }

  get isDoor(): Boolean {
    return this._isDoor;
  }

  set isDoor(value: Boolean) {
    this._isDoor = value;
  }

  get isDriver(): Boolean {
    return this._isDriver;
  }

  set isDriver(value: Boolean) {
    this._isDriver = value;
  }

  get isHistory(): Boolean {
    return this._isHistory;
  }

  set isHistory(value: Boolean) {
    this._isHistory = value;
  }

  get isLastPosition(): Boolean {
    return this._isLastPosition;
  }

  set isLastPosition(value: Boolean) {
    this._isLastPosition = value;
  }

  get isMyAccount(): Boolean {
    return this._isMyAccount;
  }

  set isMyAccount(value: Boolean) {
    this._isMyAccount = value;
  }

  get isNotifConf(): Boolean {
    return this._isNotifConf;
  }

  set isNotifConf(value: Boolean) {
    this._isNotifConf = value;
  }

  get isNotifCons(): Boolean {
    return this._isNotifCons;
  }

  set isNotifCons(value: Boolean) {
    this._isNotifCons = value;
  }

  get isParameters(): Boolean {
    return this._isParameters;
  }

  set isParameters(value: Boolean) {
    this._isParameters = value;
  }

  get isSpeedMax(): Boolean {
    return this._isSpeedMax;
  }

  set isSpeedMax(value: Boolean) {
    this._isSpeedMax = value;
  }

  get isStartStop(): Boolean {
    return this._isStartStop;
  }

  set isStartStop(value: Boolean) {
    this._isStartStop = value;
  }

  get isTempF(): Boolean {
    return this._isTempF;
  }

  set isTempF(value: Boolean) {
    this._isTempF = value;
  }

  get isTempM(): Boolean {
    return this._isTempM;
  }

  set isTempM(value: Boolean) {
    this._isTempM = value;
  }

  get isZoneOne(): Boolean {
    return this._isZoneOne;
  }

  set isZoneOne(value: Boolean) {
    this._isZoneOne = value;
  }

  get isZoneTwo(): Boolean {
    return this._isZoneTwo;
  }

  set isZoneTwo(value: Boolean) {
    this._isZoneTwo = value;
  }


  constructor(agencyName: String, authToken: String, isCarburantP: Boolean, isCarburantS: Boolean, isContactUs: Boolean, isCourse: Boolean, isDoor: Boolean, isDriver: Boolean, isHistory: Boolean, isLastPosition: Boolean, isMyAccount: Boolean, isNotifConf: Boolean, isNotifCons: Boolean, isParameters: Boolean, isSpeedMax: Boolean, isStartStop: Boolean, isTempF: Boolean, isTempM: Boolean, isZoneOne: Boolean, isZoneTwo: Boolean) {
    this._agencyName = agencyName;
    this._authToken = authToken;
    this._isCarburantP = isCarburantP;
    this._isCarburantS = isCarburantS;
    this._isContactUs = isContactUs;
    this._isCourse = isCourse;
    this._isDoor = isDoor;
    this._isDriver = isDriver;
    this._isHistory = isHistory;
    this._isLastPosition = isLastPosition;
    this._isMyAccount = isMyAccount;
    this._isNotifConf = isNotifConf;
    this._isNotifCons = isNotifCons;
    this._isParameters = isParameters;
    this._isSpeedMax = isSpeedMax;
    this._isStartStop = isStartStop;
    this._isTempF = isTempF;
    this._isTempM = isTempM;
    this._isZoneOne = isZoneOne;
    this._isZoneTwo = isZoneTwo;
  }
}

@Injectable({
  providedIn: 'root'
})

export class CurrentUserAdapter implements Adapter<Currentuser> {

  adapt(item: any): Currentuser {
    return new Currentuser(
      item.agencyName,
      item.authToken,
      item.isCarburantP,
      item.isCarburantS,
      item.isContactUs,
      item.isCourse,
      item.isDoor,
      item.isDriver,
      item.isHistory,
      item.isLastPosition,
      item.isMyAccount,
      item.isNotifConf,
      item.isNotifCons,
      item.isParameters,
      item.isSpeedMax,
      item.isStartStop,
      item.isTempF,
      item.isTempM,
      item.isZoneOne,
      item.isZoneTwo
    );
  }
}
