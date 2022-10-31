"use strict";

class cookies{
    /**
     * a function to create a cookie
     * this class is for security of the app so that we know who 'hacks' the application 
     * @param {string} name - the name of the cookie
     * @param {string} val - the value of the cookie when stored
     * @param {int} days - the amount of the days the cookie will last before destruction
     * @param {string} siteCheck - a check if the cookie is none Lax or Strict
     */
    create(name, val, days, siteCheck){
        document.cookie = `${name}=${val};expires=${this.endDaysCal(days)};path=/;SameSite=${siteCheck}`;
    }
}
