
//Instructions to every other class on how they can be an argument
interface Mappable{
  location:{
    lat:number;
    lng: number;
  }
}

//interface is a gatekeeper to methods. An interface can limit the info allowed in method
export class CustomMap{
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId),{
      zoom:1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }
  //can only refer to each class if they have the same property. (ex .lat, lng)
  //problem: not scalable
  addMarker(mappable: Mappable):void{
    new google.maps.Marker({
      map: this.googleMap,
      position:{
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }
}
