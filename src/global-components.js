import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/now-ui-kit.scss'; 

// Use a função require.context para importar os componentes da pasta 'components'.
const requireComponent = require.context(
  './components', // Caminho da pasta onde estão os componentes
  false, // Se deve olhar nas subpastas também
  /Base[A-Z]\w+\.(vue|js)$/ // Expressão regular para selecionar os componentes pelo nome. Neste caso, estamos importando componentes que começam com 'Base' e terminam com .vue ou .js.
);

// Para cada componente importado, registre-o globalmente.
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName.split('/').pop().replace(/\.\w+$/, '');

  Vue.component(componentName, componentConfig.default || componentConfig);
});