import userModel from './user';

describe('user model', () => {
    describe('definition: ', () => {
        it('should have getUser method defined', () => {
            expect(userModel.getUser).toBeDefined();
        });

        it('should have fetchAll method defined', () => {
            expect(userModel.fetchAll).toBeDefined();
        });
    });
});
