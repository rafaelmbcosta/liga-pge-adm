<template>
  <v-layout row justify-center>
    <TaskItem v-for="(task, index) in tasks" :task="task" :key="index" xs3/>
  </v-layout>
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
            'Todas as listas'
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
