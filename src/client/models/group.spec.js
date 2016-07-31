import userModel from './group';

describe('user model', () => {
    describe('definition: ', () => {
        it('should have getUser method defined', () => {
            expect(userModel.getGroup).toBeDefined();
        });

        it('should have fetchAll method defined', () => {
            expect(userModel.fetchAll).toBeDefined();
        });
    });
});
