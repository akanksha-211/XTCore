const video ={
    genre:"Sci fi",
    list:['a','b','c'],
    findMovies(){
        // const that = this;
        // this.list.forEach(function(movie, index){ 
        //     console.log(that.genre,'-',movie);
        // })

        // alternate method
        this.list.forEach ((movie, index) => {
            console.log(this.genre,' - ', movie);
        })
    }
}
video.findMovies();

