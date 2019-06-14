<!-- lista de Eventos Esmiuçados -->
<div class="divTopEsmiuPage col-md-12">
    <div class="socialIcons row">
    <?php include "../../components/social-share/social-share.html" ?>
    </div>
</div>
<div class="row">
    <div class="left col-md-3">
    <div id="esmiuFather">
        <span>Confira outros Esmiuçados</span>
        <template id="listTemplate">
            <div id="esmiuChild" class="row mt-5">
                <img id="esmiuImg2" alt="">
                <div class="col-sm-8">
                    <h2 class="" id="esmiuTitle2"></h2>
                </div>
            </div>
        </template>
   </div> 
</div>
    <div class="right col-md-9">
        <?php include 'esmiucado-template.html' ?>
    </div>
</div>