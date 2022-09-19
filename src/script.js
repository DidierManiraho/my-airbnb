const houses = [
    {
        categories:'beach',
        picture:'https://a0.muscache.com/im/pictures/a3a89adb-4047-4209-b31a-97d8b953db64.jpg?im_w=720',
        location:'NefwBury NewYork',
        rating:'New',
        distance:88,
        availability:{
            month:'sept',
            from:'12',
            to:'19'
        },
        price:599
    },
    {
        categories:'lakefront',
        picture:'https://a0.muscache.com/im/pictures/ef21f7aa-64af-4502-b4a2-abeef744d49d.jpg?',
        location:'NewTon Masschussets',
        rating:'New',
        distance:88,
        availability:{
            month:'sept',
            from:'12',
            to:'19'
        },
        price:599
    },
    {
        categories:'lakefront',
        picture:'https://a0.muscache.com/im/pictures/a3a89adb-4047-4209-b31a-97d8b953db64.jpg?',
        location:'Sudbury Boston',
        rating:'4.7',
        distance:88,
        availability:{
            month:'sept',
            from:'12',
            to:'19'
        },
        price:599
    }
];


const imageEl = document.getElementById('images-container');

function displayAllHouses( ){
imageEl.innerHTML="";
     houses.forEach(item => {
         const createdDiv = document.createElement("div")
         createdDiv.innerHTML = `
    <div class="inline-block align-bottom">
      <img class="rounded" src="${item.picture}" alt="" srcset="">
    </div>
        

    <div class="pt-2">
      <div class="flex justify-between">
        <span class="font-semibold">${item.location} </span>
        <div class="flex">
<span class="">
  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
</span>
          <span>${item.rating}</span>
        </div>
      </div>

      <div class="flex flex-col">
        <span class="text-gray-400">${item.distance} miles</span>
        <span class="text-gray-400">${item.availability.month} ${item.availability.from} - ${item.availability.to}</span>
        <div class="">
          <span class="text-black font-semibold">$${item.price}</span>
          <span class="text-black">night</span>
        </div>
      </div>
    </div>`;

         imageEl.appendChild(createdDiv);
   });

};

 displayAllHouses();








// const  images = document.getElementsByTagName('img');


// for(let i=0;i<images.length;i++){
//     //if(images[i].id === 'beach' || images[i].id === 'lakefront')
//         console.log(images[i].id);
//         //houses.forEach(el =>{console.log( el.categories ==='beach');});
// }


