import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago("Antonio", "Fogo", 4, 3);
const magaJulia = new Mago("Julia", "Gelo", 7, 10);
const arqueiroBruno = new Arqueiro("Bruno", 6);
const arqueiroMagoChico = new ArqueiroMago("Chico", 10, "Ar", 4, 8);
const guerreiroJorge = new Guerreiro("Jorge", 8);

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiroJorge];

new PersonagemView(personagens).render();