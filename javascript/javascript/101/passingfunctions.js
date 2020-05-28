
function locations(originCity, destinationCity) {

 
    console.log(`I was born in one of the most boring towns on the Cape, ${originCity} and I still live in ${destinationCity}`)
 
}
locations('Falmouth', 'Falmouth')




function oldJobs(job1, job2, job3, job4,){
   let originCity = "Falmouth"
   let mentor = "Matthew Joseph"
   let institute = "CareerDevs"
   if (job1 = 'Silver Lounge')
      console.log( ` I started working at the age of 14.  The First place i worked at was The ${job1}. I worked there for almost 12 years. Then i went to i applied to ${job2}, which I became a supervisor. I was there for about a year then i moved back to ${originCity} and applied for ${job3}. Being a ${job3} was really intense, I did not do well with open mouth surgeries. And after i had enough of that job i decided to go and further my education. Being a ${job4} wasnt making me enough money to survive. When my best friend/ life coach ${mentor}, told me about ${institute} i knew that this was the way to have a successful future!`)
   }


oldJobs ('Silver Lounge', 'UPS', 'Dental Assistant', 'Sales Associate');


// i tried to group all the parameters together instead of adding Let statements to add variables.


function oldJobs(job1, job2, job3, job4, mentor, institute, originCity){
 
   if ((job1 = 'Silver Lounge'), (mentor = 'Matt Joseph') ,(institute = 'CareerDevs'), (originCity = 'Falmouth'))
      console.log( ` I started working at the age of 14.  The First place i worked at was The ${job1}. I worked there for almost 12 years. Then i went to i applied to ${job2}, which I became a supervisor. I was there for about a year then i moved back to ${originCity} and applied for ${job3}. Being a ${job3} was really intense, I did not do well with open mouth surgeries. And after i had enough of that job i decided to go and further my education. Being a ${job4} wasnt making me enough money to survive. When my best friend/ life coach ${mentor}, told me about ${institute} i knew that this was the way to have a successful future!`)
   }


oldJobs ('Silver Lounge', 'UPS', 'Dental Assistant', 'Sales Associate');



//Arnells example.

let city1 = "Boston"
let city2 = "Paris"


function traveling(origin, destination){
   console.log(` you are traveling from ${origin} to ${destination} where there is coronavirus`)


}
traveling(city1, city2);