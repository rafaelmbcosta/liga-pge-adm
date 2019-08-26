<template>
  <v-row justify="center">
    <v-col cols="10" justify-self="center" >
      <v-row
        justify="space-between"
        align="top"
      >
        <TaskItem v-for="(task, index) in tasks" :task="task" :key="index" xs3/>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import TaskItem from './TaskItem'

export default {
  data(){
    return {
      tasks: [
        {
          title: 'Rotinas de mercado fechado',
          description: [
            'Criação dos confrontos',
            'Atualiza lista dos confrontos',
            'Cria as pontuações'
          ],
          action: 'closed_market'
        },
        {
          title: 'Rotinas de rodada finalizada',
          description: [
            'Salva os pontos dos times',
            'Calcula os resultados dos confrontos',
            'Salva as cartoletas',
            'Calcula o turno / campeonato',
            'Atualiza Todas as listas'
          ],
          action: 'round_finished'
        },
        {
          title: 'Rodar Financeiro novamente',
          description: [
            'Recalcula todas as pontuações do financeiro'
          ],
          action: 'currencies'
        },
      ]
    }
  },
  components: { TaskItem }
}
</script>
