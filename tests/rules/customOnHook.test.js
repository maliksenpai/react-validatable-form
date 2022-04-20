import { act } from '@testing-library/react-hooks';
import { testBuilder } from '../TestUtils';

test('custom rule on hook test', () => {
    const initialFormData = {
        val: '',
    };
    const rules = [{ path: 'val', ruleSet: ['required', { rule: customRule }] }];
    const result = testBuilder(rules, initialFormData);
    expect(result.current.isValid).toBe(false);
    act(() => {
        result.current.setPathValue('val', 'some g value');
    });
    expect(result.current.isValid).toBe(true);
});

const customRule = (ruleParams) => {
    const { value } = ruleParams;
    if (value && (!value.includes('g') || value.length < 5)) {
        return 'this field should include letter `g` and its length should be greater than 5';
    }
    return null;
};
