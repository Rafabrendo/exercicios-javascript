# Assincronismo
Em JavaScript, o assincronismo é um conceito crucial que permite que operações demoradas, como a leitura de um arquivo ou uma solicitação de rede, sejam realizadas de forma não bloqueante. Isso significa que o código pode continuar a ser executado enquanto aguarda a conclusão dessas operações assíncronas, ao invés de esperar que elas terminem antes de continuar.

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
    <code style="color: black;">
        const minhaPromise = new Promise((resolve, reject)=>{
            //Lógica assíncrona
            //Se a operação for bem-sucedida, chama resolve(valor)
            //Se ocorrer um erro, chame reject(erro)
        })
    </code>
</pre>

<h2 id="async">Async/Await</h2>

É uma maneira mais recente de lidar com operações assíncronas em JS.
Permite escerever código assíncrona de forma síncrona, o que torna mais legível e fácil de entender. Foram introduzidos no ECMAScript 2017(também conhecido como ES8).

<strong>'async':</strong> A palavra chave 'async' é usada para declarar que uma função é assíncrona. Funções assíncronas sempre retornam uma Promessa. Dentro de uma função assíncrona, você pode usar a palavra-chave 'await' para esperar a resolução de uma Promessa sem bloquear a execução do código.

<pre style="background: white; border-radius: 10px">
    <code style="color: black;">
        async function minhaFuncaoAssincrona(){
            return 'Olá, mundo!';
        }
    
        minhaFuncaoAssincrona().then(resultado =>{
            console.log(resultado); //Saída: Olá, mundo!
        });
    </code>
</pre>

<strong>'await':</strong> A palavra-chave 'await' é usada para esperar a resolução de uma Promessa dentro de uma função assíncrona. Quando você usa 'await', a execução da função é pausada até que a Promessa seja resolvida ou rejeitada.

<pre style="background: white; border-radius: 10px">
    <code style="color: black;">
        async function minhaFuncaoAssincrona(){
            const resultado = await minhaPromise();
            console.log(resultado); //Saída: Valor da Promessa
        }
    </code>
</pre>
