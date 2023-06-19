import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  vacations = [
    {hotelName: "Serenity Bay****",
     nights: 7,
     city: "Zarewo, Bulgarien",
     price: 476,
     id: 1,
     image: "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=23005&iid=72268129"
    },

    {hotelName: "Elektra Beach****",
    nights: 7,
    city: "Playa de Muro, Spanien",
    price: 787,
    id: 2,
    image: "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=23005&iid=62100628"
    },

    {hotelName: "Grecotel Kos Imperial*****",
    nights: 7,
    city: "Psalidi, Griechenland",
    price: 970,
    id: 3,
    image: "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=20370&iid=75007578"
    },

    {hotelName: "Aquaworld Belek****",
    nights: 7,
    city: "Belek, Türkei",
    price: 783,
    id: 4,
    image: "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=22776&iid=86236510"
    },

    {hotelName: "Magic Life Calabria****",
    nights: 7,
    city: "Pizzo, Italien",
    price: 939,
    id: 5,
    image: "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=23005&iid=65596642"
    },

    {hotelName: "Beach Resort Dubai",
    nights: 7,
    city: "Dubai, VAE",
    price: 1029,
    id: 6,
    image: "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=22776&iid=85486600"
    }
  ]
}





/*
const vacationsArray : Array<any> = []

class Vacations {
    hotelName: string
    nights: number
    city: string
    price: number
    id: number
    image: string

    constructor(hotelName: string, nights: number, city: string, price: number, id: number, image: string) {
      this.hotelName = hotelName
      this.nights = nights
      this.city = city
      this.price = price
      this.id = id
      this.image = image
      vacationsArray.push(this)
    }


}

const vacation1 = new Vacations("Serenity Bay****", 7, "Zarewo, Bulgarien", 476, 1, "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=23005&iid=72268129")
const vatation2 = new Vacations("Elektra Beach****", 7, "Playa de Muro, Spanien", 787, 2, "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=23005&iid=62100628")
const vacation3 = new Vacations("Grecotel Kos Imperial*****", 7, "Psalidi, Griechenland", 970, 3, "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=20370&iid=75007578")
const vacation4 = new Vacations("Aquaworld Belek****", 7, "Belek, Türkei", 783, 4, "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=22776&iid=86236510")
const vacation5 = new Vacations("Magic Life Calabria****", 7, "Pizzo, Italien", 939, 5, "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=23005&iid=65596642")
const vacation6 = new Vacations("Beach Resort Dubai", 7, "Dubai, VAE", 1029, 6, "https://i.giatamedia.com/s.php?uid=203162&source=xmlpool2&size=800&cid=22776&iid=85486600")


const vacationsElement = document.getElementById("vacations") as HTMLElement

for (let vacation of vacationsArray) {
  vacationsElement.innerHTML +=
  `
  <div class="card" style="width: 18rem;">
  <img src="${vacation.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${vacation.hotelName}</h5>
    <p class="card-text">${vacation.city}</p>
    <p class="card-text">${vacation.nights}</p>
    <p class="card-text">${vacation.price}</p>
    <a href="#" class="btn btn-primary">Book now</a>
  </div>
</div>
  `
}*/




