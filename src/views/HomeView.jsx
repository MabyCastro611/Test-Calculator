import React from "react";
import { calculadora } from '../utils/utils'

export const HomeView = () => {
	return (
		<main>
			<table>
				<tr>
					<th colspan="5">
						<input id="displayBox" type="text" readonly />
					</th>
				</tr>
				<tr>
					<td>
						<div class="displaytable-cell" id="bMClear">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.clearMemory()}
							>
								MC
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bMRead">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.readMemory()}
							>
								MR
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bMAdd">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.addToMemory()}
							>
								M+
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bMSub">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.subtractFromMemory()}
							>
								M-
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bMSave">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.saveToMemory()}
							>
								MS
							</button>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="displaytable-cell" id="bSquare">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.square()}
							>
								x^2
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bNthPowerOfTenOr">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.nthTenPower()}
							>
								10^x
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bSine">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeMathFunction('sin(')}
							>
								sin
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bCosine">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeMathFunction('cos(')}
							>
								cos
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bTangent">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeMathFunction('tan(')}
							>
								tan
							</button>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="displaytable-cell" id="bCube">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.cube()}
							>
								x^3
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bInverseNumber">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.inverseNumber()}
							>
								x^-1
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bSqrt">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeMathFunction('sqrt(')}
							>
								sqrt
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bLogOr">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeMathFunction('log(')}
							>
								log
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bNaturalLog">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeMathFunction('ln(')}
							>
								ln
							</button>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="displaytable-cell" id="bPercentage">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeMathFunction('e')}
							>
								e
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bClearDisplayCE">
							<button
								class="button clearbutton"
								type="button"
								onClick={() => calculadora.clearDisplay()}
							>
								CE
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bClearDisplayC">
							<button
								class="button clearbutton"
								type="button"
								onClick={() => calculadora.clearDisplay()}
							>
								C
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bDelete">
							<button
								class="button clearbutton"
								type="button"
								onClick={() => calculadora.eraseLastInput()}
							>
								Del
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bDivide">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeOperatorToDisplay('/')}
							>
								/
							</button>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="displaytable-cell" id="bPi">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeMathFunction('PI')}
							>
								π
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bSeven">
							<button
								class="button numberbutton"
								type="button"
								onClick={() => calculadora.writeToDisplay('7')}
							>
								7
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bEight">
							<button
								class="button numberbutton"
								type="button"
								onClick={() => calculadora.writeToDisplay('8')}
							>
								8
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bNine">
							<button
								class="button numberbutton"
								type="button"
								onClick={() => calculadora.writeToDisplay('9')}
							>
								9
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bMultiply">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeOperatorToDisplay('*')}
							>
								x
							</button>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="displaytable-cell" id="bFactorial">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.calculateFactorial()}
							>
								n!
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bFour">
							<button
								class="button numberbutton"
								type="button"
								onClick={() => calculadora.writeToDisplay('4')}
							>
								4
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bFive">
							<button
								class="button numberbutton"
								type="button"
								onClick={() => calculadora.writeToDisplay('5')}
							>
								5
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bSix">
							<button
								class="button numberbutton"
								type="button"
								onClick={() => calculadora.writeToDisplay('6')}
							>
								6
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bSubtract">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeOperatorToDisplay('-')}
							>
								-
							</button>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="displaytable-cell" id="bToggleSign">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.toggleSign()}
							>
								(-)
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bOne">
							<button
								class="button numberbutton"
								type="button"
								onClick={() => calculadora.writeToDisplay('1')}
							>
								1
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bTwo">
							<button
								class="button numberbutton"
								type="button"
								onClick={() => calculadora.writeToDisplay('2')}
							>
								2
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bThree">
							<button
								class="button numberbutton"
								type="button"
								onClick={() => calculadora.writeToDisplay('3')}
							>
								3
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bAdd">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeOperatorToDisplay('+')}
							>
								+
							</button>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="displaytable-cell" id="bOpenParentheses">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeOperatorToDisplay('(')}
							>
								(
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bCloseParentheses">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeOperatorToDisplay(')')}
							>
								)
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bZero">
							<button
								class="button numberbutton"
								type="button"
								onClick={() => calculadora.writeToDisplay('0')}
							>
								0
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bDot">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.writeToDisplay('.')}
							>
								.
							</button>
						</div>
					</td>
					<td>
						<div class="displaytable-cell" id="bEquals">
							<button
								class="button"
								type="button"
								onClick={() => calculadora.solveOperation()}
							>
								=
							</button>
						</div>
					</td>
				</tr>
			</table>
		</main>
	);
};
