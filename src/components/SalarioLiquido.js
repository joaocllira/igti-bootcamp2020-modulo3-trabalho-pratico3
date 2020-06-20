import React from 'react';
import { formatNumber } from '../calcs/salary';

const SalarioLiquido = (props) => {
    let { calculatedValues, baseSalary } = props;

    return (
        <>
            <div class="row">
                <div class="input-field col s3">
                    <input id="salario_liquido" type="text" class="validate value-field sal-liq-field" 
                        value={`${formatNumber(calculatedValues.netSalary)} (${(calculatedValues.netSalary / (baseSalary || 1) * 100).toFixed(2)}%)`} />
                    <label class="active" for="salario_liquido">Salário líquido</label>
                </div>
                <div class="col s8">
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <div class="sal-bar disc-inss" style={{width: `${calculatedValues.discountINSS / (baseSalary || 1) * 100}%`}}></div>
        
                    <div class="sal-bar disc-irpf"  style={{width: `${calculatedValues.discountIRPF / (baseSalary || 1)* 100}%`}}></div>
                
                    <div class="sal-bar sal-liquido"  style={{width: `${calculatedValues.netSalary / (baseSalary || 1) * 100}%`}}></div>
                </div>
            </div>
        </>
    );
}

export default SalarioLiquido;