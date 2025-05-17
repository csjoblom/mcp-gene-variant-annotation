#!/usr/bin/env python3
import os
import aws_cdk as cdk
from service_stack import VariantServiceStack

app = cdk.App()

civic_api_key = os.environ.get("CIVIC_API_KEY", "")

VariantServiceStack(app, "VariantServiceStack", civic_api_key=civic_api_key)

app.synth()


