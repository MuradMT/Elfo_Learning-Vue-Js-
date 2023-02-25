const app = Vue.createApp({
    data(){
          return{
            border:10
          }
    },
    methods:{
        iconic(){
          this.border+=1;
        },
    },
});
app.component('mycomponent',{
  props:{
    da:{
      type:String,
      required:true,
      default:"Hello World"
    }  
  },
  template:`
    <div>
      <nav>
        <ul id="navmod">
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
      </nav>
      <button @click="calliconic"></button>
      <h1>{{da}}</h1>
      <h1>{{ message }}</h1>
      <a v-bind:href="link">This is music channel</a>
      <p v-show="onsale">On Sale!</p>
      <p v-if="number>0">This number is positive</p>
      <p v-else-if="number<0">This number is negative</p>
      <p v-else>This number is zero</p>
      <h2>{{id}}</h2>
      <ul id="so">
        <li v-for="key in data">{{key}}</li>
      </ul>
      <h2 id="dom">Domino tayfa tam liste:</h2>
      <ol  id="so">
        <li v-for="data in arrayofobject" :key="data.Id">{{data.Name}}</li>
      </ol>
      <p>{{number}}</p>
      <button @click="incrementcount">Add number</button>
      <br>
      <button @click="decreasecount">Decrease number</button>
      <p :style="style">Hello World</p>
      <p>{{fullname}}</p>
      <h2>{{some}}</h2>
    </div>
  `,
  data() {
    return {
      link:`https://www.youtube.com/`,
      onsale:true,
      number:0,
      name:"Murad",
      message:"Hello",
      surname:"Mammadzada",
      id:Symbol("id"),
      data:[1,2,3,4,5],
      arrayofobject:[
        {Id:1,Name:"Murad"},
        {Id:2,Name:"Seda"},
        {Id:3,Name:"Zulfuqar"},
        {Id:4,Name:"Eltac"},
      ],
      style:{
        color:"blue",
        fontsize:"1rem"
      }
    }
  },
  methods:{
    incrementcount(){
      this.number+=1
    },
    decreasecount(){
      this.number-=1
    },
    calliconic(){
      this.$emit('callicon')
    }
  },
  computed:{
    fullname(){
      return this.name + " " + this.surname
    },
    some(){
      return `${this.number}`
    }
  }

});
app.component('validation',{
  template:
  `<input v-model="name"/>
     <p>this is name{{name}}</p>
  `,
    data(){
      return {
        name:null
      }
    }
});
app.mount('#app');
