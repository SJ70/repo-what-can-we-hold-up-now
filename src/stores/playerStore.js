import { create } from 'zustand';

export const usePlayerStore = create((set) => ({
  players: [],

  addPlayer: () => set((state) => {
    const updated = [...state.players];
    const player = {
      name: "",
      color: { 
        r: Math.floor(Math.random() * 256), 
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
      },
      power: 0,
      alive: true,
    };
    updated.push(player);
    return {
      players: updated,
    };
  }),

  removePlayer: (idx) => set((state) => {
    const updated = [...state.players];
    updated.splice(idx, 1);
    return {
      players: updated,
    };
  }),

  setPlayerName: (idx, name) => set((state) => {
    const updated = [...state.players];
    updated[idx].name = name;
    return {
      players: updated,
    };
  }),

  setPlayerColor: (idx, color) => set((state) => {
    const updated = [...state.players];
    updated[idx].color = color;
    return {
      players: updated,
    };
  }),

  plusPlayerPower: (idx) => set((state) => {
    const updated = [...state.players];
    updated[idx].power++;
    return {
      players: updated,
    };
  }),

  minusPlayerPower: (idx) => set((state) => {
    const updated = [...state.players];
    if (updated[idx].power > 0) {
      updated[idx].power--;
    }
    return {
      players: updated,
    };
  }),

  switchPlayerAlive: (idx) => set((state) => {
    const updated = [...state.players];
    updated[idx].alive = !updated[idx].alive;
    return {
      players: updated,
    };
  }),

  // localStorage
  savePlayers: () => set((state) => {
    const playersJson = JSON.stringify(state.players);
    localStorage.setItem("players", playersJson);
    return {
      players: state.players,
    };
  }),

  loadPlayers: () => set((state) => {
    const playersJson = localStorage.getItem("players");
    const players = playersJson ? JSON.parse(playersJson) : [];
    return {
      players: players,
    };
  }),

}));