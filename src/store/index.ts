import Category from "@/models/Category";
import Task from "@/models/Task";
import UpdateStatus from "@/models/UpdateStatusTaskModel";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const category: Category[] = [
  {
    name: "Todo",
    tasks: [
      { name: "Learn VueJs", completed: false, uid: '1', 
        assigner: {
          avata: 'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/ironman_c3jrbc.jpg',
          userName: 'Tu Nguyen'
        },
        typeIssue: {
          id: 1,
          name: 'bug'
        }
      }
    ],  
  },
  {
    name: "In progress",
    tasks: [{ name: "Learn Vuex", completed: false, uid: '2',
      assigner: {
        avata: 'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/ironman_c3jrbc.jpg',
        userName: 'Tu Nguyen'
      },
      typeIssue: {
        id: 1,
        name: 'bug'
      }
    }
  ],
  },
  {
    name: "Done",
    tasks: [{ name: "Introduction Vuex", completed: false, uid: '3' }],
  },
];
export default new Vuex.Store({
  state: {
    category: category,
  },
  getters: {
    category: (state) => state.category,
  },
  mutations: {
    updateStatus(state, payload: UpdateStatus) {
      const ctg = state.category.find(ctg => ctg.name === payload.name);
      state.category.forEach(ctg => {
        const ctgOldIndex = ctg.tasks.findIndex(task => task.uid === payload.task.uid);
        if (ctgOldIndex >= 0)
          ctg.tasks.splice(ctgOldIndex, 1);
      });
      ctg?.tasks.push(payload.task);
    },
  },
  actions: {
  },
  modules: {},
});
