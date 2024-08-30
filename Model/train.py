import os
import sys
import subprocess

MODEL_MAIN_SCRIPT = "/caminho/para/model_main_tf2.py"
PIPELINE_CONFIG_PATH = "ssd_mobilenet_v2_coco_2018_03_29/pipeline.config"
MODEL_DIR = "output_model_directory"

if not os.path.exists(MODEL_MAIN_SCRIPT):
    sys.exit(f"Erro: O script {MODEL_MAIN_SCRIPT} não foi encontrado. Verifique o caminho.")

if not os.path.exists(PIPELINE_CONFIG_PATH):
    sys.exit(f"Erro: O arquivo de configuração {PIPELINE_CONFIG_PATH} não foi encontrado. Verifique o caminho.")
    
train_command = [
    "python",
    MODEL_MAIN_SCRIPT,
    "--model_dir=" + MODEL_DIR,
    "--pipeline_config_path=" + PIPELINE_CONFIG_PATH,
]

subprocess.run(train_command)