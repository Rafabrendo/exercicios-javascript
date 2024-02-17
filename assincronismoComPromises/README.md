# Assincronismo
Em JavaScript, o assincronismo é um conceito crucial que permite que operações demoradas, como a leitura de um arqquivo ou uma solicitação de rede, sejam realizadas de forma não bloqueante. Isso significa que o código pode continuar a ser executado enquanto aguarda a conclusão dessas operações assíncronas, ao invés de esperar que elas terminem antes de continuar.

Existem várias maneiras de lidar com o assincronismo em JavaScript:
<ul>
    <li><a href="#callbacks">Callbacks</a></li>
    <li><a href="#promessas">Promessas</a></li>
    <li><a href="#async">Async/Await</a></li>
<ul>


<h2 id="promessas">Promessas</h2>

As promessas são objetos que representam o resultado eventual de uma operação assíncrona. Elas permitem encadear operações e lidar com erros de forma mais eficiente do que os callbacks. São recursos poderosos para lidar com operações assíncronas de uma forma mais legível e organizada. Uma promessa representa um valor que pode estar disponível agora, no futuro ou nunca, Elas são especialmente úteis quando se trata de trabalhar com código assíncrono, como requisiçõess de rede acesso a banco de dados, ou qualquer operação que não seja imediatamente resolvida.

Aqui está a estrutura báasica de uma promessa em JavaScript: 
<pre style="background: white; border-radius:10px">
    <code style="color: blue;">
        const minhaPromise = new Promise((resolve, reject)=>{
            //Lógica assíncrona
            //Se a operação for bem-sucedida, chama resolve(valor)
            //Se ocorrer um erro, chame reject(erro)
        })
    </code>
</pre>
