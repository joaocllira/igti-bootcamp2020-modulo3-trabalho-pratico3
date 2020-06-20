import React from 'react';
import { formatNumber } from '../calcs/salary';

const INSSandIRPFValues = ({calculatedValues}) => {
    return (
        <div class="row">
            <div class="input-field col s3">
                <input id="base_inss" type="text" class="validate value-field" value={formatNumber(calculatedValues.baseINSS)} />
                <label class="active" for="base_inss">Base INSS</label>
            </div>
            <div class="input-field col s3">
                <input id="desconto_inss" type="text" class="validate value-field inss-field" value={formatNumber(calculatedValues.discountINSS)} />
                <label class="active" for="desconto_inss">Desconto INSS</label>
            </div>
            <div class="input-field col s3">
                <input id="base_irpf" type="text" class="validate value-field" value={formatNumber(calculatedValues.baseIRPF)} />
                <label class="active" for="base_irpf">Base IRPF</label>
            </div>
            <div class="input-field col s3">
                <input id="desconto_irpf" type="text" class="validate value-field irpf-field" value={formatNumber(calculatedValues.discountIRPF)} />
                <label class="active" for="desconto_irpf">Desconto IRPF</label>
            </div>
        </div>
    );
}

export default INSSandIRPFValues;