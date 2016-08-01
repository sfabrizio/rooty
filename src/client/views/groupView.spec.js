import groupView from './groupView';

describe('groupView', () => {
    describe('definition: ', () => {
        it('should have render method defined', () => {
            expect(groupView.render).toBeDefined();
        });

        it('should have showDetail method defined', () => {
            expect(groupView.showDetail).toBeDefined();
        });

        it('should have hideLoadIndicator method defined', () => {
            expect(groupView.hideLoadIndicator).toBeDefined();
        });
    });
});
