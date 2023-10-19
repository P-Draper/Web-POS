import React, { useState, useEffect } from 'react';
import '../../App.css';
import { ReactComponent as BayouSVG } from '../../assets/bayoutextsvg.svg';

function MenuScreen() {
    const smallsItems = [
      { name: "F.G.T.", description: "Fried green tomato!", price: "$6" },
      { name: "Buffalo Cauliflower", description: "Roasted cauliflower in spicy buffalo sauce", price: "$7" },
      { name: "Blistered Okra", description: "Okra brined and blistered shishito style", price: "$8" },
      { name: 'Fried Okra', description: 'Classic fried okra.', price: '$8'},
      { name: 'Blackened Brussels', description: 'Brusselsprouts charred and served hot', price: '$9'}
    ];
    const poboysItems = [
      {name: 'Shrimp', description: `Fried shrimp po'boy with Cajun spice!`},
      {name: 'Ham & Swiss', description: 'Ham and swiss sourced from our Italian uncles on Graham Ave.'},
      {name: 'Fried Chicken', description: 'Is this Southern enough?'},
      {name: 'Bayou Burger', description: ''},
      {name: 'Black Bean Burger', description: ''},
      {name: 'B.L.F.G.T.', description: 'Bacon Lettuce Fried Green Tomato!'},
      {name: 'Cajun Caprese', description: ''}
    ]
    const baskets = [
      {name: 'Shrimp', description: 'A basket of our fried shrimp'},
      {name: 'Chicken', description: 'A basket of our fried chicken'}
    ]
    const sides = [
      {name: 'Fries', description: ''},
      {name: 'Tater-tots', description: 'Gimme some of your tots!'}
    ]
  
    return (
      <div>
        <BayouSVG className='bayou-logo'/>
        
        <div className='smalls-section'>
          <h2>Small Plates</h2>
          <div className='smalls'>
            {smallsItems.map(item => (
              <SmallsCard key={item.name} item={item} />
            ))}
          </div>
        </div>
    
        <div className='poboys-section'>
          <div className="header-container">
            <h2>Po'Boys</h2>
            <span className='price'>$9 / $17</span>
          </div>
          <div className='poboys'>
            {poboysItems.map(item => (
              <PoboysCard key={item.name} item={item} />
            ))}
          </div>
        </div>
    
        <div className='baskets-section'>
          <div className='header-container'>
            <h2>Baskets</h2>
            <span className='price'>$11</span>
          </div>
          <div className='baskets'>
            {baskets.map(item => (
              <BasketsCard key={item.name} item={item} />
            ))}
          </div>
        </div>
    
        <div className='sides-section'>
          <div className='header-container'>
            <h2>Sides</h2>
            <span className='price'>$6</span>
          </div>
          <div className='sides'>
            {sides.map(item => (
              <SidesCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
            }  
  
  function SmallsCard({ item }) {
    return (
      <div className='card smalls-card'>
        <div className="item-header">
          <h3>{item.name}</h3>
          <p className='price'>{item.price}</p>
        </div>
        <p>{item.description}</p>
      </div>
    );
  }
  
  function PoboysCard({ item }) {
    return (
      <div className='card poboys-card'>
        <div className="item-header">
          <h3>{item.name}</h3>
          <p className='price'>{item.price}</p>
        </div>
        <p>{item.description}</p>
      </div>
    );
  }
  
  function BasketsCard({ item }) {
    return (
      <div className='card baskets-card'>
        <div className="item-header">
          <h3>{item.name}</h3>
          <p className='price'>{item.price}</p>
        </div>
        <p>{item.description}</p>
      </div>
    );
  }
  
  function SidesCard({ item }) {
    return (
      <div className='card sides-card'>
        <div className="item-header">
          <h3>{item.name}</h3>
          <p className='price'>{item.price}</p>
        </div>
        <p>{item.description}</p>
      </div>
    );
  }
export default MenuScreen