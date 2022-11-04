"use strict";

class Cookies{
    /**
     * a function to create a cookie
     * this class is for security of the app so that we know who 'hacks' the application 
     * @param {string} name - the name of the cookie
     * @param {string} val - the value of the cookie when stored
     * @param {int} days - the amount of the days the cookie will last before destruction
     * @param {string} sameSite - a check if the cookie is none Lax or Strict
     */
    create(name, val, days, sameSite){
        document.cookie = `${name}=${val};expires=${this.endDaysCal(days)};path=/;SameSite=${sameSite}`;
    }
    /**
     * function for ending day of the cookie
     * @param {int} days - amount of days the cookies stands
     * @returns
     */
    endDaysCal(days){
        return new Date(new Date().getTime() + (days + 24 * 60 * 60 * 100));
    }

    /**
     * check if cookie exists
     * @param {string} name - name of the cookie
     * @returns
     */
    cookieExists(name){
        return document.cookie.includes(name);
    }
    /**
     * function that reads the value of a cookie
     * @param {string} name - name of the cookie for the value reading
     * @returns
     */
    cookieValue(name){
        return (name = (document.cookie + ';').match(new RegExp(name + '=.*;'))) && name[0].split(/=|;/)[1];
    }
    /**
     * function that deletes the cookie 
     * @param {string} name - name of the cookie that needs to be deleted
     */
    deleteCookie(name){
        document.cookie = `${name}=null;expires=1;path=/;SameSite=Strict`;
    }
}
