// URL del archivo JSON en Vercel
const url = 'https://efjson.vercel.app/db.json';

// Función para obtener y mostrar los datos
fetch(url)
    .then(response => response.json())
    .then(data => {
        const contentDiv = document.getElementById('content');
        let html = '';

        // Iterar sobre el primer array (data[0]) y luego sobre cada plan dentro del array plan_tramo2
        data[2].forEach(entry => {
            entry.plan_tramo4.forEach(item => {
                html += `
                    <div class="jumbotron">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h2 class="card-title">${item.tramo}</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h2 class="card-title">${item.mes}</h2>
                                    </div>
                                </div>
                            </div>
                        </div><br>
                        <h3 class="text mx-auto"><u><i>Espacio:</i></u> ${item.espacio}</h3>
                        <hr>
                        <h3 class="text mx-auto"><u><i>Unidad Curricular:</i></u> ${item.unidad_curricular}</h3>
                        <hr>
                        <h3 class="text mx-auto"><i>Contenido Estructurante:</i> ${item.contenido_estructurante}</h3>
                        <hr>
                        <h3 class="text mx-auto"><i>Contenido Específico:</i> ${item.contenido_especifico}</h3>
                        <hr>
                        <h3 class="text mx-auto"><u><i>Competencias Generales:</i></u> ${item.competencias_generales.join(', ')}</h3>
                        <hr>
                        <h3 class="text mx-auto"><u><i>Competencias Específicas:</i></u> <i>CE1. Competencia Motriz:</i>  ${item.competencias_especificas}.</h3>
                        <hr>
                        <h3 class="text mx-auto"><u><i>Criterios de Logro:</i></u> ${item.criterios_de_logro}</h3>
                        <hr>
                        <h3 class="text mx-auto"><u><i>Metas de Aprendizaje:</i></u> ${item.metas_de_aprendizaje}</h3>
                        <hr>
                        <h3 class="text mx-auto"><i>Plan de aprendizaje:</i> </h3>

                        <table class="center-block" border="1">
                            <tr><!-- PARTE INICIAL -->
                                <th><i>Inicio: </i>${item.plan_de_aprendizaje_1.inicio.join('<br>')}
                                </th>
                                <th><i>Inicio: </i>${item.plan_de_aprendizaje_2.inicio.join('<br>')}
                                </th>
                                <th><i>Inicio: </i>${item.plan_de_aprendizaje_3.inicio.join('<br>')}
                                </th>
                                <th><i>Inicio: </i>${item.plan_de_aprendizaje_4.inicio.join('<br>')}
                                </th>
                            </tr>
                            <tr><!-- PARTE PRINCIPAL -->
                                <td><i>Desarrollo:</i> ${item.plan_de_aprendizaje_1.desarrollo.join('<br>')}
                                </td>
                                <td><i>Desarrollo:</i> ${item.plan_de_aprendizaje_2.desarrollo.join('<br>')}
                                </td>
                                <td><i>Desarrollo:</i> ${item.plan_de_aprendizaje_3.desarrollo.join('<br>')}
                                </td>
                                <td><i>Desarrollo:</i> ${item.plan_de_aprendizaje_4.desarrollo.join('<br>')}
                                </td>
                            </tr>
                            <tr> <!-- PARTE FINAL -->
                                <td><i>Cierre:</i> ${item.plan_de_aprendizaje_1.cierre.join('<br>')}
                                </td>
                                <td><i>Cierre:</i> ${item.plan_de_aprendizaje_2.cierre.join('<br>')}
                                </td>
                                <td><i>Cierre:</i> ${item.plan_de_aprendizaje_3.cierre.join('<br>')}
                                </td>
                                <td><i>Cierre:</i> ${item.plan_de_aprendizaje_4.cierre.join('<br>')}
                                </td>
                            </tr>
                        </table>
                        <h2 class="text mx-auto"><i>Recursos/Adicionales:</i> ${item.recursos_adicionales || 'N/A'}</h2>
                        <hr>
                    </div>
                `;
            });
        });

        contentDiv.innerHTML = html;
    })
    .catch(error => {
        console.error('Error al cargar el JSON:', error);
    });
