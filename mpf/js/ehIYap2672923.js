
      function atomiShowItems({items}) {
      try {
        items.forEach((item) => {
          const hiddenItem = [...document.querySelectorAll(`#${item}`), ...document.querySelectorAll(`.${item}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      } catch (error) {
        console.log(error);
      }
      }
    
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
        } catch (error) {
          console.log(error);
        }
      }
    
      (function() {
        function atomiRdn(e, t) {
          try {
            return Math.floor(Math.random() * (t - e + 1) + e)
          } catch (error) {
            console.log(error);
          }
        }

        try {
          function scheduleRandomUpdate(element) {
            const min = parseInt(element.dataset.min) || 400;
            const max = parseInt(element.dataset.max) || 700;
            
            const randomDelay = Math.random() * 3000;
            
            setTimeout(() => {
              try {
                let current = parseInt(element.innerText);
                
                // Initialize if not a valid number
                if (isNaN(current)) {
                  current = atomiRdn(min, max);
                }
                
                // Apply increment (-1 to +2) and clamp within bounds
                const increment = atomiRdn(-5, 7);
                const newValue = Math.max(min, Math.min(max, current + increment));
                
                element.innerText = newValue.toString();
                
                // Schedule the next update with a new random delay
                scheduleRandomUpdate(element);
              } catch (error) {
                console.log('Random update error:', error);
              }
            }, randomDelay);
          }

          // Initialize random updates for each element
          document.querySelectorAll('.atomicat-random').forEach(el => {
            scheduleRandomUpdate(el);
          });
        } catch (error) {
          console.log(error);
        }
      })();
    
    (function() {
      try {
        document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener("keydown", function (e) {
            e.ctrlKey && e.preventDefault();
          }),
          (document.onkeydown = function (e) {
            if (123 == e.keyCode) return !1;
          }),
          document.addEventListener("contextmenu", (e) => e.preventDefault());
        });
      } catch (error) {
        console.log(error);
      }
    })();
    
      (function() {
        function atomiEleRandomDrops() {
          try {
            const randomDrops = document.querySelectorAll('.atomicat-randomdrop-text');

            randomDrops.forEach(element => {
              const start = parseInt(element.dataset.start, 10);
              const end = parseInt(element.dataset.end, 10);
              let current = start;

              const interval = setInterval(() => {
                const findDelayParent = element.closest('.atomicat-delay') || element.closest('.atomicat-hidden');
                if (findDelayParent) return;
                if (current > end) {
                  const step = Math.floor(Math.random() * 2) + 1; // Randomly 1 or 2
                  current = Math.max(current - step, end);
                  element.textContent = current;
                } else {
                  clearInterval(interval);
                }
              }, Math.random() * (5000 - 3000) + 3000); // Randomly between 3 and 5 seconds
            });
          } catch (error) {
            console.log(error);
          }
        }
        try {
          const hasRandomDropsText = document.querySelectorAll('.atomicat-randomdrop-text')
          console.log(hasRandomDropsText)
          if(hasRandomDropsText?.length){
            atomiEleRandomDrops()
          }
        } catch (error) {
          console.log(error);
        }
      })();
    
    (function() {
      try {
        const accordionTitles = document.querySelectorAll(".a-ac-t");
        accordionTitles.forEach((title, index) => {
          title.addEventListener("click", () => {
            const isCurrentlyActive = title.classList.contains("a-ac-t-active");
            
            const accordionContainer = title.closest(".accordion, .a-accordion");
            const allAccordionTitles = accordionContainer ? accordionContainer.querySelectorAll(".a-ac-t") : accordionTitles;
            allAccordionTitles.forEach((accordionTitle) => {
              accordionTitle.classList.remove("a-ac-t-active");
              const content = accordionTitle.nextElementSibling;
              if (content) {
                content.classList.add("a-c-inactive");
              }
              if (accordionTitle.childNodes[1] && accordionTitle.childNodes[1].childNodes[0]) {
                accordionTitle.childNodes[1].childNodes[0].classList.add('atomicat-hidden');
              }
              if (accordionTitle.childNodes[1] && accordionTitle.childNodes[1].childNodes[1]) {
                accordionTitle.childNodes[1].childNodes[1].classList.remove('atomicat-hidden');
              }
              const unfoldButton = content ? content.nextElementSibling : null;
              if (unfoldButton) {
                unfoldButton.classList.add("atomicat-hidden");
              }
            });
            if (!isCurrentlyActive) {
              title.classList.add("a-ac-t-active");
              const accordionContent = title.nextElementSibling;
              if (accordionContent) {
                accordionContent.classList.remove("a-c-inactive");
              }
              if (title.childNodes[1] && title.childNodes[1].childNodes[0]) {
                title.childNodes[1].childNodes[0].classList.remove('atomicat-hidden');
              }
              if (title.childNodes[1] && title.childNodes[1].childNodes[1]) {
                title.childNodes[1].childNodes[1].classList.add('atomicat-hidden');
              }
              const unfoldButton = accordionContent ? accordionContent.nextElementSibling : null;
              if (unfoldButton) {
                unfoldButton.classList.remove("atomicat-hidden");
              }
            }
          });
        });
      } catch (error) {
        return error;
      }
    })();(function() {
          try {
              const clickeventList = [{"compKey":"673b721","misc":{"type":"text"}},{"compKey":"f2b44ec","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();(function() {
          try {
              const animationList = [{"key":"ce522ec","type":"button"},{"key":"ec50454","type":"button"},{"key":"e8c02c9","type":"button"},{"key":"0ebb86c","type":"button"}];
    
              animationList.forEach((animationItem, index) => {
                const { key, type } = animationItem;
                const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
                const targetElement = document.querySelector(elementClass);


                    const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                targetElement.style.opacity = 1;
                                targetElement.classList.add('a-e-a-' + key);
                            } else if(animationItem?.misc?.hideOffscreen) {
                                targetElement.classList.remove('a-e-a-' + key);
                                targetElement.style.opacity = 0;
                            }
                        });
                    });

                    observer.observe(targetElement);
              });
    
          } catch (error) {
              return error;
          }
      })();
      (function() {
        try {
          setTimeout(() => {
            let elementsWithDelayClass = document.querySelectorAll(".atomicat-delay");
            if(elementsWithDelayClass){
              elementsWithDelayClass.forEach(element => {
                element.classList.remove("atomicat-delay");
              });
            }
            
          }, 0);
        } catch (error) {
          console.log(error);
        }
      })();
    
      (function() {
        try {
          const countdownList = [{"compKey":"29813252-6f78-44de-9dd5-9a13075e5a3b","style":{"countdown":{"maxWidth":{"desktop":"41%","mobile":"35%"},"gap":{"desktop":"0px"},"flexDirection":"column","paddingRight":{"desktop":"0px"},"paddingBottom":{"desktop":"0px"},"paddingLeft":{"desktop":"0px"},"paddingTop":{"desktop":"0px"},"background":"","digits":{"color":"rgba(215, 192, 104, 1)","fontSize":{"desktop":"36px"}}}},"misc":{"type":"countdown","countdownType":"evergreen","tag":"div","labelTag":"span","dateTime":"00:14","items":[{"text":"Days","show":false},{"text":"Hours","show":false},{"text":"Minutes","show":true},{"text":"Seconds","show":true}],"hideLabel":true,"separator":{"active":true}}}];

          countdownList.forEach(function(countdown) {
            const countdownType = countdown.misc.countdownType;
            const dateTime = countdown.misc.dateTime;
            const compKey = countdown.compKey.slice(0, 7);
            const intervalName = 'atomicat_countdown_interval_' + compKey;
            const countdownContainer = document.querySelector('.atomicat-countdown-' + compKey);

            window[intervalName] = setInterval(function updateCountdown() {
              let targetTime;
              const findDelayParent = countdownContainer.closest('.atomicat-delay') || countdownContainer.closest('.atomicat-hidden');
              if (findDelayParent) return;
              if (countdownType === "evergreen") {
                const sessionStorageKey = 'atomicat_countdown_start_' + compKey;
                let countdownStart = sessionStorage.getItem(sessionStorageKey);
                if (!countdownStart) {
                  countdownStart = new Date().getTime();
                  sessionStorage.setItem(sessionStorageKey, countdownStart);
                }
                const [hours, minutes] = dateTime.split(":").map(Number);
                targetTime = new Date(parseInt(countdownStart));
                targetTime.setHours(targetTime.getHours() + hours);
                targetTime.setMinutes(targetTime.getMinutes() + minutes);
              } else if (countdownType === "due_date") {
                targetTime = new Date(dateTime);
              }

              const now = new Date();
              const distance = targetTime - now;

              if (distance <= 0) {
                clearInterval(window[intervalName]);
                if(countdownContainer) {
                  const countdownDigits = countdownContainer.querySelectorAll('.a-cd-d');
                  countdownDigits.forEach(digit => digit.textContent = '00');
                }
                return;
              }

              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);

              if(countdownContainer) {
                if(countdownContainer.querySelector('.atomicat-countdown-days')){
                  countdownContainer.querySelector('.atomicat-countdown-days').textContent = days < 10 ? `0${days}` : days;
                }
                if(countdownContainer.querySelector('.atomicat-countdown-hours')){
                  countdownContainer.querySelector('.atomicat-countdown-hours').textContent = hours < 10 ? `0${hours}` : hours;
                }
                if(countdownContainer.querySelector('.atomicat-countdown-minutes')){
                  countdownContainer.querySelector('.atomicat-countdown-minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
                }
                if(countdownContainer.querySelector('.atomicat-countdown-seconds')){
                  countdownContainer.querySelector('.atomicat-countdown-seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;
                }
              }
            }, 1000);

          });
        } catch (error) {
          console.log(error);
        }
      })();