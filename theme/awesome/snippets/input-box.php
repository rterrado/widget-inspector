<?php 
    $model       = (isset($snippet['model'])) ? 'xmodel="'.$snippet['model'].'"' : '';
    $type        =  (isset($snippet['type'])) ? 'type="'.$snippet['type'].'"' : 'type="text"';
    $size        = $snippet['size'] ?? 'standard';
    $placeholder =  (isset($snippet['placeholder'])) ? 'placeholder="'.$snippet['placeholder'].'"' : '';
    $hasFieldset = $snippet['hasFieldset'] ?? true;
    $name        = (isset($snippet['name'])) ? 'name="'.$snippet['name'].'"' : '';
    $change      = (isset($snippet['change'])) ? 'xchange="'.$snippet['change'].'"' : '';
    $disabled    =  (isset($snippet['is_disabled'])&&$snippet['is_disabled']) ? 'disabled' : '';
?>

<?php if (isset($snippet['label'])): ?>
    <div class="margin-bottom-4">
        <label class="label letter-spacing-7 color-label-gray"><?php echo $snippet['label']; ?></label>
    </div>
<?php endif; ?>
<?php if ($hasFieldset): ?>
    <fieldset class="fieldset__input padding-x-7 background-color-primary-extra-light:disabled padding-y-9 text-4 font-weight-300 border-radius-extra-small-5" <?php echo $disabled; ?>>
<?php endif; ?>
        <div class="display-flex align-items-center">
            <?php if (isset($snippet['icon_svg_path'])): ?>
                <?php snippet('svg',[
                    'path' => $snippet['icon_svg_path'],
                    'class' => 'small-width-4 margin-right-5 color-bored-gray'
                ]); ?>
            <?php endif; ?>    
            <input <?php echo $type.' '.$model.' '.$placeholder.' '.$name.' '.$change; ?> class="border-style-none width-24 background-color-transparent color-bored-gray">
        </div>
<?php if ($hasFieldset): ?>
    </fieldset>
<?php endif; ?>