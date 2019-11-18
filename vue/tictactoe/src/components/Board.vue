<template>
  <div>
    <div class="status">{{ status }}</div>
    <div class="board-row">
      <Square :value="squares[0]" v-on:click-square="handleClick(0)"></Square>
      <Square :value="squares[1]" v-on:click-square="handleClick(1)"></Square>
      <Square :value="squares[2]" v-on:click-square="handleClick(2)"></Square>
    </div>
    <div class="board-row">
      <Square :value="squares[3]" v-on:click-square="handleClick(3)"></Square>
      <Square :value="squares[4]" v-on:click-square="handleClick(4)"></Square>
      <Square :value="squares[5]" v-on:click-square="handleClick(5)"></Square>
    </div>
    <div class="board-row">
      <Square :value="squares[6]" v-on:click-square="handleClick(6)"></Square>
      <Square :value="squares[7]" v-on:click-square="handleClick(7)"></Square>
      <Square :value="squares[8]" v-on:click-square="handleClick(8)"></Square>
    </div>
    <div v-if="gameOver" class="restart">
      <button @click="restartGame">Restart Game!</button>
    </div>
  </div>
</template>

<script>
import Square from "./Square";
export default {
  components: {
    Square
  },
  data: () => ({
    squares: Array(9).fill(null),
    isXNext: true,
    winner: null
  }),
  computed: {
    status() {
      if (!this.winner && this.drawGame()) {
        return "DRAW!!";
      } else {
        return this.winner
          ? `${this.winner} WINS!!!`
          : `Next Player: ${this.isXNext ? "X" : "0"}`;
      }
    },
    gameOver() {
      return this.winner || this.drawGame();
    }
  },
  methods: {
    handleClick(i) {
      if (!this.winner && !this.squares[i]) {
        this.squares.splice(i, 1, this.isXNext ? "X" : "O");

        if (this.checkWin()) {
          this.winner = this.isXNext ? "X" : "O";
        }

        this.isXNext = !this.isXNext;
      }
    },
    checkWin() {
      const winners = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      return winners.find(([a, b, c]) => {
        return (
          this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c]
        );
      });
    },
    drawGame() {
      return !this.squares.some(square => {
        return square === null;
      });
    },
    restartGame() {
      this.squares = Array(9).fill(null);
      this.isXNext = true;
      this.winner = null;
    }
  }
};
</script>

<style></style>
