/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { travelData } from './types';
import { Menu, Search, User, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export default function App() {
  // Use refs for animation state to avoid stale closures in the loop
  const orderRef = useRef<number[]>(Array.from({ length: travelData.length }, (_, i) => i));
  const detailsEvenRef_val = useRef(true);
  const isAnimating = useRef(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsEvenRef = useRef<HTMLDivElement>(null);
  const detailsOddRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  const cardWidth = 200;
  const cardHeight = 300;
  const gap = 40;
  const numberSize = 50;
  const ease = "sine.inOut";

  const getCardId = (index: number) => `card-${index}`;
  const getCardContentId = (index: number) => `card-content-${index}`;
  const getSliderItemId = (index: number) => `slide-item-${index}`;

  const init = () => {
    const order = orderRef.current;
    const detailsEven = detailsEvenRef_val.current;
    const [active, ...rest] = order;
    const detailsActive = detailsEven ? detailsEvenRef.current : detailsOddRef.current;
    const detailsInactive = detailsEven ? detailsOddRef.current : detailsEvenRef.current;
    
    const height = window.innerHeight || 800;
    const width = window.innerWidth || 1200;
    const offsetTop = height - 430;
    const offsetLeft = width - 830;

    // Initial setup
    gsap.set(paginationRef.current, {
      top: offsetTop + 330,
      left: offsetLeft,
      y: 200,
      opacity: 0,
      zIndex: 60,
    });
    gsap.set(navRef.current, { y: -200, opacity: 0 });

    // Active Card
    gsap.set(`#${getCardId(active)}`, {
      x: 0,
      y: 0,
      width: width,
      height: height,
      borderRadius: 0,
      zIndex: 10
    });
    gsap.set(`#${getCardContentId(active)}`, { x: 0, y: 0, opacity: 0 });

    // Details
    gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
    gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
    
    const inactiveTexts = detailsInactive?.querySelectorAll('.text, .title-1, .title-2, .desc, .cta');
    if (inactiveTexts) {
      gsap.set(inactiveTexts, { y: 100 });
    }

    // Progress
    gsap.set(".progress-sub-foreground", {
      width: `${100 * (active + 1) / travelData.length}%`,
    });

    // Rest of the cards
    rest.forEach((i: number, index: number) => {
      gsap.set(`#${getCardId(i)}`, {
        x: offsetLeft + 400 + index * (cardWidth + gap),
        y: offsetTop,
        width: cardWidth,
        height: cardHeight,
        zIndex: 30,
        borderRadius: 10,
      });
      gsap.set(`#${getCardContentId(i)}`, {
        x: offsetLeft + 400 + index * (cardWidth + gap),
        zIndex: 40,
        y: offsetTop + cardHeight - 100,
        opacity: 1
      });
      gsap.set(`#${getSliderItemId(i)}`, { x: (index + 1) * numberSize });
    });

    // Entrance Animation
    const startDelay = 0.6;

    gsap.to(coverRef.current, {
      x: width + 1000,
      duration: 1.2,
      delay: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(coverRef.current, { display: 'none' });
      },
    });

    rest.forEach((i: number, index: number) => {
      gsap.to(`#${getCardId(i)}`, {
        x: offsetLeft + index * (cardWidth + gap),
        zIndex: 30,
        ease,
        delay: startDelay + 0.05 * index,
      });
      gsap.to(`#${getCardContentId(i)}`, {
        x: offsetLeft + index * (cardWidth + gap),
        zIndex: 40,
        ease,
        delay: startDelay + 0.05 * index,
      });
    });

    gsap.to(paginationRef.current, { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to(navRef.current, { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
  };

  const step = (direction: 'next' | 'prev' = 'next') => {
    if (isAnimating.current) return Promise.resolve();
    isAnimating.current = true;

    return new Promise<void>((resolve) => {
      const prevActive = orderRef.current[0];
      const currentOrder = [...orderRef.current];
      
      if (direction === 'next') {
        const first = currentOrder.shift()!;
        currentOrder.push(first);
      } else {
        const last = currentOrder.pop()!;
        currentOrder.unshift(last);
      }
      orderRef.current = currentOrder;

      const nextDetailsEven = !detailsEvenRef_val.current;
      detailsEvenRef_val.current = nextDetailsEven;

      const detailsActive = nextDetailsEven ? detailsEvenRef.current : detailsOddRef.current;
      const detailsInactive = nextDetailsEven ? detailsOddRef.current : detailsEvenRef.current;

      const active = currentOrder[0];
      const activeData = travelData[active];

      if (detailsActive) {
        const placeText = detailsActive.querySelector('.place-box .text');
        const title1 = detailsActive.querySelector('.title-1');
        const title2 = detailsActive.querySelector('.title-2');
        const desc = detailsActive.querySelector('.desc');
        
        if (placeText) placeText.textContent = activeData.place;
        if (title1) title1.textContent = activeData.title;
        if (title2) title2.textContent = activeData.title2;
        if (desc) desc.textContent = activeData.description;

        gsap.set(detailsActive, { zIndex: 22 });
        gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
        
        const activeElements = detailsActive.querySelectorAll('.text, .title-1, .title-2, .desc, .cta');
        activeElements.forEach((el: Element, idx: number) => {
          gsap.set(el, { y: 100 });
          gsap.to(el, {
            y: 0,
            delay: 0.1 + idx * 0.05,
            duration: 0.7,
            ease,
          });
        });
      }

      if (detailsInactive) {
        gsap.set(detailsInactive, { zIndex: 12 });
      }

      const rest = currentOrder.slice(1);
      const height = window.innerHeight || 800;
      const width = window.innerWidth || 1200;
      const offsetTop = height - 430;
      const offsetLeft = width - 830;

      gsap.set(`#${getCardId(prevActive)}`, { zIndex: 10 });
      gsap.set(`#${getCardId(active)}`, { zIndex: 20 });
      gsap.to(`#${getCardId(prevActive)}`, { scale: 1.5, ease });

      gsap.to(`#${getCardContentId(active)}`, {
        y: offsetTop + cardHeight - 10,
        opacity: 0,
        duration: 0.3,
        ease,
      });

      gsap.to(`#${getSliderItemId(active)}`, { x: 0, ease });
      
      gsap.to(".progress-sub-foreground", {
        width: `${100 * (active + 1) / travelData.length}%`,
        ease,
      });

      gsap.to(`#${getCardId(active)}`, {
        x: 0,
        y: 0,
        ease,
        width: width,
        height: height,
        borderRadius: 0,
        onComplete: () => {
          const prevActiveIndexInRest = rest.indexOf(prevActive);
          const xNew = offsetLeft + prevActiveIndexInRest * (cardWidth + gap);
          
          gsap.set(`#${getCardId(prevActive)}`, {
            x: xNew,
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            zIndex: 30,
            borderRadius: 10,
            scale: 1,
          });

          gsap.set(`#${getCardContentId(prevActive)}`, {
            x: xNew,
            y: offsetTop + cardHeight - 100,
            opacity: 1,
            zIndex: 40,
          });
          
          gsap.set(`#${getSliderItemId(prevActive)}`, { x: (prevActiveIndexInRest + 1) * numberSize });

          if (detailsInactive) {
            gsap.set(detailsInactive, { opacity: 0 });
            const inactiveTexts = detailsInactive.querySelectorAll('.text, .title-1, .title-2, .desc, .cta');
            gsap.set(inactiveTexts, { y: 100 });
          }
          
          isAnimating.current = false;
          resolve();
        },
      });

      rest.forEach((i: number, index: number) => {
        if (i !== prevActive) {
          const xNew = offsetLeft + index * (cardWidth + gap);
          gsap.set(`#${getCardId(i)}`, { zIndex: 30 });
          gsap.to(`#${getCardId(i)}`, {
            x: xNew,
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            ease,
            delay: 0.1 * (index + 1),
          });

          gsap.to(`#${getCardContentId(i)}`, {
            x: xNew,
            y: offsetTop + cardHeight - 100,
            opacity: 1,
            zIndex: 40,
            ease,
            delay: 0.1 * (index + 1),
          });
          gsap.to(`#${getSliderItemId(i)}`, { x: (index + 1) * numberSize, ease });
        }
      });
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const loadImages = async () => {
        const timeout = new Promise((_, reject) => 
          setTimeout(() => reject(new Error("Timeout")), 5000)
        );
        
        const promises = travelData.map((d) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = d.image;
            img.onload = resolve;
            img.onerror = resolve; 
          });
        });

        try {
          await Promise.race([Promise.all(promises), timeout]);
        } catch (err) {
          console.warn("Image loading took too long or failed, starting anyway", err);
        } finally {
          init();
        }
      };

      loadImages();
    }, containerRef);

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#1a1a1a]">
      <div ref={coverRef} className="cover" />

      <nav ref={navRef}>
        <div>
          <Menu className="cursor-pointer" />
          <span className="ml-2">Menu</span>
        </div>
        <div className="nav-logo text-2xl font-black tracking-tighter">TRAVEL.</div>
        <div>
          <span className="active cursor-pointer">Destinations</span>
          <span className="ml-6 cursor-pointer">Adventures</span>
          <span className="ml-6 cursor-pointer">Journal</span>
          <div className="svg-container ml-6">
            <Search className="cursor-pointer" />
          </div>
          <div className="svg-container ml-6">
            <User className="cursor-pointer" />
          </div>
        </div>
      </nav>

      <div id="demo">
        {travelData.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <div
              id={getCardId(index)}
              className="card"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div id={getCardContentId(index)} className="card-content">
              <div className="content-start"></div>
              <div className="content-place">{item.place}</div>
              <div className="content-title-1">{item.title}</div>
              <div className="content-title-2">{item.title2}</div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div ref={detailsEvenRef} id="details-even" className="details">
        <div className="place-box">
          <div className="text">{travelData[0].place}</div>
        </div>
        <div className="title-box-1">
          <div className="title-1">{travelData[0].title}</div>
        </div>
        <div className="title-box-2">
          <div className="title-2">{travelData[0].title2}</div>
        </div>
        <div className="desc">{travelData[0].description}</div>
        <div className="cta">
          <button className="bookmark">
            <Heart />
          </button>
          <button className="discover">Discover Location</button>
        </div>
      </div>

      <div ref={detailsOddRef} id="details-odd" className="details">
        <div className="place-box">
          <div className="text">{travelData[0].place}</div>
        </div>
        <div className="title-box-1">
          <div className="title-1">{travelData[0].title}</div>
        </div>
        <div className="title-box-2">
          <div className="title-2">{travelData[0].title2}</div>
        </div>
        <div className="desc">{travelData[0].description}</div>
        <div className="cta">
          <button className="bookmark">
            <Heart />
          </button>
          <button className="discover">Discover Location</button>
        </div>
      </div>

      <div ref={paginationRef} className="pagination">
        <div className="arrow" onClick={() => step('prev')}>
          <ChevronLeft />
        </div>
        <div className="arrow" onClick={() => step('next')}>
          <ChevronRight />
        </div>
        <div className="slide-numbers">
          {travelData.map((_: any, index: number) => (
            <div key={index} id={getSliderItemId(index)} className="item">
              {index + 1}
            </div>
          ))}
        </div>
        <div className="progress-sub-container">
          <div className="progress-sub-background">
            <div className="progress-sub-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}
