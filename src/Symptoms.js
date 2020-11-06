import Card from './Card'
import React from 'react'
import './Symptoms.css'
import djej from './imgs/djej.PNG'
import main from './imgs/main.PNG'
import tkoh from './imgs/tkoh.PNG'
import symptoms from './imgs/symptoms.PNG'
import cat from './imgs/cat.PNG'
import protect from './imgs/protect.PNG'
import wash from './imgs/wash.PNG'
import nose from './imgs/Nose.PNG'
import wave_top from './imgs/wave_top.png'
import wave_bottom from './imgs/wave_bottom.png'
import clean from './imgs/clean.PNG'
import hangout from './imgs/hangout.PNG'
import CardRow from './CardRow'
import Footer from './Footer'

function Symptoms() {
    return (
        <div className="symptoms">
            <h1>How coronavirus spread</h1>
            <p>the new coronavirus is a respiratory virus wich spreads primarily through dropleys of saliva or discharge from the nose when an infected person coughs or sneezes, so it's important that you also practice respiratory etiquette (bu coughing into a fiexed elbow.)</p>
            <div className="block_cards">
                <Card img={main} title={"From close contract with an infected person"} text={"A positive corona is manifested as a uniform plasma across the length of a conductor"} />
                <Card img={tkoh} title={"Droplets from infected person's sneeze"} text={"It can often be see, glowing blue/white, though many of the emissions are in the ultraviolet"} />
                <Card img={djej} title={"Touching objects that have cough or sneeze"} text={"A positive corona has much lower density of free electrons compared to a negative corona"} />
            </div>
            <h1>Symptoms of coronavirus</h1>
            <p>The COVID-19 spreads primarily through droplets of salvia or discharge from nose when an infected person coughs or sneezes, so it's important that you also practice respiratory etiquette (bycoughing into flexed elbow.)</p>
            <img src={symptoms} alt="symptoms" />
            <div className="block_cards2">
                <img src={wave_top} alt="wave" />
                <h1>Houw to protect yourself</h1>
                <p>Corona viruses are a type of virus, there are many different kinds, and some cause disease. A newly identified has caused</p>
                <CardRow img={protect} title={"How to protect yourself"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nunc quis felis efficitur interdum a et velit. Nam justo nisi, hendrerit dictum blandit ac, pellentesque nec velit. Donec mollis pretium purus eu dictum. Aliquam a mauris vehicula, lobortis metus ut."} />
                <CardRow img={wash} title={"Wash your hand"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nunc quis felis efficitur interdum a et velit. Nam justo nisi, hendrerit dictum blandit ac, pellentesque nec velit. Donec mollis pretium purus eu dictum. Aliquam a mauris vehicula, lobortis metus ut."} />
                <CardRow img={nose} title={"Use Nose-Rag"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nunc quis felis efficitur interdum a et velit. Nam justo nisi, hendrerit dictum blandit ac, pellentesque nec velit. Donec mollis pretium purus eu dictum. Aliquam a mauris vehicula, lobortis metus ut."} />
                <CardRow className="last" img={cat} title={"Avoid contact"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nunc quis felis efficitur interdum a et velit. Nam justo nisi, hendrerit dictum blandit ac, pellentesque nec velit. Donec mollis pretium purus eu dictum. Aliquam a mauris vehicula, lobortis metus ut."} />
                <img src={wave_bottom} alt="wave" />
            </div>
            <h1>Two step you should do for coronavirus</h1>
            <div className="block_cards3">
                <CardRow img={clean} title={"Clean your hands often"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nunc quis felis efficitur interdum a et velit. Nam justo nisi, hendrerit dictum blandit ac, pellentesque nec velit. Donec mollis pretium purus eu dictum. Aliquam a mauris vehicula, lobortis metus ut."} />
                <CardRow img={hangout} title={"Avoid Hangout"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nunc quis felis efficitur interdum a et velit. Nam justo nisi, hendrerit dictum blandit ac, pellentesque nec velit. Donec mollis pretium purus eu dictum. Aliquam a mauris vehicula, lobortis metus ut."} />
            </div>
            <Footer />
        </div>
    )
}

export default Symptoms
