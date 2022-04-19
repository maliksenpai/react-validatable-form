import { testBuilder } from '../TestUtils';
import { act } from '@testing-library/react-hooks';

test('unset path value test', () => {
    const initialFormData = {
        val: '',
    };
    const rules = [{ path: 'val', ruleSet: ['required'] }];
    const result = testBuilder(rules, initialFormData);
    expect(result.current.isValid).toBe(false);
    act(() => {
        result.current.setPathValue('val', 'some value');
    });
    expect(result.current.isValid).toBe(true);
});
