import userView from './userView';

describe('userView', () => {
    describe('definition: ', () => {
        it('should have render method defined', () => {
            expect(userView.render).toBeDefined();
        });

        it('should have showDetail method defined', () => {
            expect(userView.showDetail).toBeDefined();
        });

        it('should have hideDetail method defined', () => {
            expect(userView.hideDetail).toBeDefined();
        });

        it('should have hideLoadIndicator method defined', () => {
            expect(userView.hideLoadIndicator).toBeDefined();
        });
    });
});
