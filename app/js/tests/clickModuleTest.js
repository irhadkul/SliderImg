/**
 * Created by Irhad on 25.02.2017.
 */

describe("Click Module", function () {

   beforeEach(function () {



       loadFixtures('clickModule.html');

   });
    it("should click correct element", function () {
        var spyEvent = spyOnEvent($j('#g2'), "click");
        $j('#g2').trigger('click');
        expect('click').toHaveBeenTriggeredOn('#g2');
        expect(spyEvent).toHaveBeenTriggered();
    })



});
