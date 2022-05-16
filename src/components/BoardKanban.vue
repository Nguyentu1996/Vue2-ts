<template>
  <div class="flex container mt-7">
    <div v-for="(item, index) in category" :key="index" class="board-list">
      <div
        class="status-list"
        @drop="onDrop($event, item.name)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div
          class="px-3 pb-4 pt-3 uppercase text-slate-700 text-13 text-left truncate"
        >
          {{ item.name }}
        </div>
        <div class="h-full pl-2">
          <div
            v-for="task in item.tasks"
            class="issue-wrap"
            :key="task.uid"
          >
            <div class="issue" :draggable="true" @dragstart="startDrag($event, task, item.name)">
              <p class="text-left">{{ task.name }}</p>
              <p class="text-left">{{ task.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import { mapGetters, mapMutations, mapActions } from "vuex";
import Task from '@/models/Task';
import UpdateStatus from '@/models/UpdateStatusTaskModel';

export default {
  props: {},
  computed: {
    ...mapGetters({ category: "category"}),
  },
  methods: {
    ...mapMutations(['updateStatus']),
    startDrag(evt: any, task: Task, ctgName: string) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("item", JSON.stringify(task));
      evt.dataTransfer.setData("ctg", ctgName);

    },
    onDrop(evt: any, name: string) {
      const item = evt.dataTransfer.getData("item");
      const ctgName = evt.dataTransfer.getData("ctg");
      if (ctgName === name) return;
      const task: Task = JSON.parse(item);
      const payload: UpdateStatus = { task, name };
      this.updateStatus(payload);
    },
  },
};
</script>
<style lang="scss" scoped>
.board-list {
  @apply flex flex-col mr-2;
  flex-shrink: 0;
  border-radius: 0.125rem;
  background-color: #ebecf0;
  width: calc(25% - 8px);
  min-height: 400px;
  min-width: 200px;
}
.status-list {
  @apply flex flex-col h-full pr-2;
  background-color: "#F4F5F7";
  flex-shrink: 0;
  border-radius: 0.125rem;
  padding-bottom: 20px;
  .issue-wrap {
    @apply flex cursor-grab;
    .issue {
      @apply flex flex-col bg-white transition-all duration-100 select-none;
      flex-grow: 1;
      padding: 10px;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 2px 0px;
      border-radius: 0.125rem;
      margin-bottom: 5px;
    }
    .issue:hover {
      @apply bg-slate-100;
    }
  }
}
</style>
