import {Injectable} from "@angular/core";


@Injectable()
export class TripService {
  private trips: any;

  constructor() {
    this.trips = [];
  }

  getAll() {
    return this.trips;
  }

  getItem(id) {
    for (var i = 0; i < this.trips.length; i++) {
      if (this.trips[i].id === parseInt(id)) {
        return this.trips[i];
      }
    }
    return null;
  }

  remove(item) {
    this.trips.splice(this.trips.indexOf(item), 1);
  }
}
