// Scroll reveal with stagger (Intersection Observer) + shared post data
const POSTS=[
 {t:"Golden Hour in Alfama",d:"March 2, 2026",e:"Lisbon, my home base: tiled streets, fado drifting out of tiny bars and the best pastéis de nata at the bottom of the hill.",img:"place-01"},
 {t:"Cherry Blossom Week in Tokyo",d:"February 12, 2026",e:"Seven days chasing sakura from Ueno Park to Meguro River — plus where to eat when every café has a two-hour queue.",img:"place-02"},
 {t:"48 Hours of Bangkok Street Food",d:"January 20, 2026",e:"Boat noodles, mango sticky rice and a midnight market crawl. My honest ranking of every stall I tried.",img:"place-03"},
 {t:"Lost (Happily) in the Marrakech Souks",d:"December 8, 2025",e:"How to navigate the medina without a map, haggle with a smile, and find the quiet rooftop that saved my sanity.",img:"place-04"},
 {t:"Driving the Amalfi Coast",d:"November 15, 2025",e:"Cliffside bends, lemon groves and the blue of the Tyrrhenian Sea. A route for nervous drivers — I promise.",img:"place-05"},
 {t:"Hanoi at 6am",d:"October 30, 2025",e:"Motorbikes, steaming pho and tai chi by Hoan Kiem Lake. Why the old quarter is magic before the city wakes.",img:"place-06"},
 {t:"Santorini Beyond the Postcards",d:"September 22, 2025",e:"Yes, the blue domes are real. Here's how to see them without the crowds — and the village I liked even more.",img:"place-07"},
 {t:"Bali Rice Terraces at Dawn",d:"August 18, 2025",e:"Sunrise over Tegallalang, temple incense in Ubud and learning to surf (badly) in Canggu.",img:"place-08"}];
function cardHTML(p){return `<article class="card reveal"><a class="ph" href="#"><img src="./images/${p.img}.jpg" alt="${p.t}" loading="lazy"></a><div class="b"><span class="date">${p.d}</span><h3>${p.t}</h3><p>${p.e}</p><a class="more" href="#">Read More →</a></div></article>`;}
function revealAll(){const io=new IntersectionObserver(es=>{let k=0;es.forEach(e=>{if(e.isIntersecting){e.target.style.transitionDelay=(k++*90)+'ms';e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));}
document.addEventListener('DOMContentLoaded',revealAll);
