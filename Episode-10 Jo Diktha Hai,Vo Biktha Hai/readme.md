npm start 
server runs and open it on the browser 

in this episode we will focus on how we can make our app beautiful 

how many ways we can get css to our application

1)using className we are doing
2)Sass and Scss 
Sass writeing css with super power ,writing css will become little more advanced and easy 
this is the not a recommended 
this is not used in industry ,not a recommedded way 

3)styled components 
uber uses it to write css for our components 
you can choose with your react application 

library --

material  ui  (this is a way to make our application beautiful)
they gave you export component which are already beautiful 
you already get prebilled component ,you need to just to import it 

lot of company use it 

-- Bootstrap  
custom way to style your components

-- Chakra Ui

-- ant design 
second most popular react ui 



here we will learn taildwind css


a)normal css 
b)Sass
c)Style components 


tailwindcss.com

Rapidly build modern application 

go to the get started 

it works all the framework available
it works with angular ,html 


we will go to the framework guides 

> Parcel 
let see how to created tailwind with parcel


post css --a tool for transforming css with javascript

npm install -D tailwind postcss 


npx tailwind init
created yhe configuration for the tailwind
npx we are executing tailwind css in our reposistory
it created a new file tailwind.config.js

configuration for our tailwind

--- Configure PostCssrc
--configuration for the postcssrc
--you have to tell we are using tailwind here 
--parcel will used postcssrcc to unsderstand tailwind

{
    "plugins":{
        "tailwindcss":{}
    }
}

go to the root .postcssrc

--- tailwind.config,js

-- this array will tell whee we can used the tailwind file 

any file under src has one of this extension 
our project will track 


/** @type {import('tailwindcss').Config}*/
module.exports ={
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme:{
        extend:{}
    },
    plugins:[],
}


---
index.css


@tailwind base;
@tailwind components;
@tailwind utilities;

it is a kind of importing tailwind to the css 


our writing this our project is configured to use the tailwind now 

npm start 
everything is broken we have tailwind in our project configure 

how we can customise make our project beautiful  using tailwind


tailwind gives className for every css you can put,you can directly used over here 


it will work exactly the same as normal css file 

className="flex"
tailwind will add display fle over it 

suppose you want to decrease the width of the logo 

<img className="w-56">
w-something will add the width to your image

here we dont have to write the code in css

we have to apply lot of css to class
it would be large

tailwind also prebuilt component

class name go so long
your js would become lengthy

sometimes we are put css in the jsx 
jsx loaded with css className
it make the code little ugly


tailwind css is very light weight 

parcel would make bundle of css
it would only import the css which are actually required in our app ,it is very dynamic 
it is the advantage

it keep the bundle size small

you can build whatever you want to 
there is class for everything 

ther is hover class as well

there will be no duplication
your website should in dark mode ,
with tailwind you can do easily  

you can configure it easily

i can write the css on the go