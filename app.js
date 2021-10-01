//Decalring Variables
let sections = document.querySelectorAll('Section');
let data = [];
const frag = document.createDocumentFragment();
let link = [];
let links = [];
let text;
let N = sections.length;
let i = 0;


//create section dynamically
    
let n = N+1;
let m = document.querySelector('main');
let s = document.createElement('Section');
let d = document.createElement('div');
let h = document.createElement('h2');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
p2.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";

h.textContent = "Section " + n;
d.appendChild(h);
d.appendChild(p1);
d.appendChild(p2);
s.appendChild(d);
m.appendChild(s);

s.setAttribute("id", "section" + n);
s.setAttribute("data-nav", "Section " + n);
d.setAttribute("class", "landing__container");

//loop on each element in the sections
sections = document.querySelectorAll('Section');

sections.forEach(element=>{    
    //creating links, textNode and lists  
    const l = document.createElement('li');
    link = document.createElement('a');
    text = document.createElement('textNode');
    data[i] = element.getAttribute("data-nav");
    i++; 
    link.appendChild(text);
    l.appendChild(link); 
    frag.appendChild(l); 
    
    //collecting all links in array called 'links'
    links.push(link);
})

let ul = document.querySelector('ul');
ul.appendChild(frag);

// add eventListener
N = sections.length;
for(let i = 0; i < N; i++)
{
    links[i].className = 'link';
}

for(let i = 0; i < N; i++)
{
    let n = i+1;
    links[i].textContent = "Section " + n;
    links[i].addEventListener('click', ()=>
    {
        sections[i].scrollIntoView({behavior: "smooth"});
        //adding activation theme
        links[i].classList.add('your-active-class');
        
        //removing active theme from other links
        for(let j = 0 ; j < N; j++)
        {
            if(j !== i && links[i].classList.contains('your-active-class'))
            {
                links[j].classList.remove('your-active-class');
            }
        }
    });
}

window.addEventListener('scroll', element=>{
    for(let i = 0; i < N; i++){
    links[i].classList.remove('your-active-class');
    let a = sections[i].getBoundingClientRect().top;
    if( a > -150 && a < 250){
    links[i].classList.add('your-active-class');
    
    }
    }  
  })

let nav = document.querySelector('.navbar__menu');
nav.insertAdjacentHTML('afterbegin',ul);
