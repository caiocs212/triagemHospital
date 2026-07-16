/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{const Paciente = __webpack_require__(/*! ./models/Paciente */ \"./models/Paciente.js\")\r\n\r\nlet cadastrar = document.getElementById('cadastrar')\r\nlet mostrar = document.getElementById('mostrar')\r\nlet resposta = document.getElementById('resposta')\r\nlet pacientes = []\r\nlet contPac = 0\r\n\r\ncadastrar.addEventListener('click', () =>{\r\n    contPac++\r\n\r\n    let pac = new Paciente (Number(contPac), document.getElementById('nome').value, Number(document.getElementById('peso').value), Number(document.getElementById('altura').value), Number(document.getElementById('circCintura').value), Number(document.getElementById('circQuadril').value), document.getElementById('genero').value)\r\n    pacientes.push(pac)\r\n    console.log(pac)\r\n    console.table(pacientes)\r\n\r\n    let imc\r\n    imc = pac.calcularIMC()\r\n    let rcq\r\n    rcq =  pac.calcularRCQ()\r\n    console.log(imc, rcq)\r\n    let classificacaoIMC = pac.classificarIMC()\r\n    let classificacaoRCQ = pac.classificarRCQ()\r\n    console.log(classificacaoIMC, classificacaoRCQ)\r\n\r\n    resposta.innerHTML = `o imc de ${pac.nome} é de: ${imc.toFixed(2)} <br> o rcq de ${pac.nome} é de: ${rcq.toFixed(2)} <br> a classificação do imc de ${pac.nome} é: ${classificacaoIMC} <br> a classificação do rcq de ${pac.nome} é: ${classificacaoRCQ}`\r\n})\r\n\r\nmostrar.addEventListener('click', () =>{\r\n    console.table(pacientes)\r\n})\n\n//# sourceURL=webpack://progclasse03/./index.js?\n}");

/***/ },

/***/ "./models/Paciente.js"
/*!****************************!*\
  !*** ./models/Paciente.js ***!
  \****************************/
(module) {

eval("{class Paciente{\r\n    constructor(cod, nome, peso, altura, circCintura, circQuadril, genero){\r\n        this.cod = cod;\r\n        this.nome = nome;\r\n        this.peso = peso;\r\n        this.altura = altura;\r\n        this.circCintura = circCintura;\r\n        this.circQuadril = circQuadril;\r\n        this.genero = genero\r\n    }\r\n\r\n    \r\n\r\n    calcularIMC(){\r\n        return this.peso/(this.altura * this.altura)\r\n    }\r\n    calcularRCQ(){\r\n        return this.circCintura/this.circQuadril\r\n    }\r\n    classificarIMC(){\r\n        let imc = this.calcularIMC()\r\n\r\n        if(imc < 0.0){\r\n            return 'valor invalido, digite novamente'\r\n        }else if(imc >= 0 && imc < 18.5){\r\n            return 'magreza'\r\n        }else if(imc >= 18.5 && imc < 25){\r\n            return 'normal'\r\n        }else if(imc >= 25 && imc < 30){\r\n            return 'sobrepeso'\r\n        }else if(imc >= 30 && imc < 35){\r\n            return 'obesidade 1'\r\n        }else if(imc >= 35 && imc < 40){\r\n            return 'obesidade 2'\r\n        }else if(imc >= 40){\r\n            return 'obesidade 3'\r\n        }\r\n    }\r\n    classificarRCQ(){\r\n        let rcq = this.calcularRCQ()\r\n        console.log('genero', this.genero)\r\n\r\n        switch(this.genero){\r\n            case 'M':\r\n                if(rcq < 0.90){\r\n                    return 'risco baixo'\r\n                }else if(rcq >= 0.90 && rcq <= 1.0){\r\n                    return 'risco moderado'\r\n                }else if(rcq > 1.0){\r\n                    return 'risco alto'\r\n                }\r\n            break\r\n            case 'F':\r\n                 if(rcq < 0.80){\r\n                    return 'risco baixo'\r\n                }else if(rcq >= 0.80 && rcq <= 0.85){\r\n                    return 'risco moderado'\r\n                }else if(rcq > 0.85){\r\n                    return 'risco alto'\r\n                }\r\n            break\r\n        }\r\n    }\r\n}\r\nmodule.exports = Paciente\n\n//# sourceURL=webpack://progclasse03/./models/Paciente.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;